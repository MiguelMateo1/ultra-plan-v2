const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const skillsDB = require('./skillsDB.js');
const resetPassword = require('./resetPassword.js');
const bcrypt = require('bcrypt');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());
// app.use(cors());  
app.use(cors({
    origin: function (origin, callback) {
      // Check if the request origin is in the allowedOrigins array
      if (!origin || process.env.ALLOWED_ORIGINS.includes(origin)) {
        // Allow the request
        callback(null, true);
      } else {
        // Deny the request with an error message
        callback(new Error('Not allowed by CORS'));
      }
    } 
  }));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connect to the database
db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database: ' + err);
      return;
    }
    console.log('Connected to the database');
  });

// login user 
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM app_users WHERE email = ?";

    db.query(sql, [email], (err, result) => {
        if (err) {
            console.error('Error executing the query: ' + err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (result.length > 0) {
            // User exists, now compare the hashed password
            bcrypt.compare(password, result[0].password, (err, isMatch) => {
                if (err) {
                    console.error('Error comparing passwords: ' + err);
                    return res.status(500).json({ message: 'Internal server error' });
                }

                if (isMatch) {
                    const id = result[0].id
                    // generate access token
                    const token = jwt.sign({id}, process.env.ACCESS_TOKEN, {
                        // 4 days
                        expiresIn: 4 * 24 * 60 * 60,
                    });
                    
                    delete result[0].password
                    result[0].token = token
                    return res.json({auth: true, result: result});
                } else {
                    return res.json({auth: false, message: 'Invalid email or password' });
                }
            });
        } else {
            // User not found
            return res.json({ auth: false, message: 'Invalid email or password' });
        }
    });    
});
// login user End=========
 
// token verify func
const verify = (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        res.send('no token')
    } else {
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
            if (err) {
                res.json({err: err,auth: false, message: 'failed to authenticate'});
            } else {
                next();
            }
        })
    }
};
// token verify func END

// update user
app.post('/update', verify , (req, res) => {
    const {first_name, last_name, email, password, id} = req.body;

    // checks if email exist
    const checkSql = "SELECT * FROM app_users WHERE email = ?";
    db.query(checkSql, [email], (err, result) => {
        if (err) {
            return res.json({ message: 'Error executing the query' });
        }
        
        const newUserId = result[0].id
        if (newUserId != id) {
            return res.json({ message: 'User already exists' });
         // checks if email exist END====

        } else {
            // update new user info
            const updateSql = "UPDATE app_users SET first_name = IF(?='', first_name, ?), last_name = IF(?='', last_name, ?), email = IF(?='', email, ?), password = IF(?='', password, ?) WHERE id = ?";
            if (!password) {
                // If no new password is provided, exclude password field from the update
                db.query(updateSql, [first_name, first_name, last_name, last_name, email, email, password, password, id], (err, result) => {
                    if (err) {
                        return res.json({ message: 'Error updating user info' });
                    } else {
                        // user updated
                        // get updated user data
                        const selectSql = "SELECT * FROM app_users WHERE id = ?";
                        db.query(selectSql, [id], (err, result) => {
                            // generate access token
                            const token = jwt.sign({ id }, process.env.ACCESS_TOKEN, {
                                // 4 days
                                expiresIn: 4 * 24 * 60 * 60,
                            });

                            // deletes password and add token to results before returning the data
                            delete result[0].password;
                            result[0].token = token;
                            return res.json({ auth: true, result: result });
                        });
                    }
                });
            } else {
                // Hash the new password before updating it
                bcrypt.hash(password, 10, (err, hashedPassword) => {
                    if (err) {
                        return res.json({ message: 'Error hashing password' });
                    }

                    // Use hashedPassword in the query
                    db.query(updateSql, [first_name, first_name, last_name, last_name, email, email, hashedPassword, hashedPassword, id], (err, result) => {
                        if (err) {
                            return res.json({ message: 'Error updating user info' });
                        } else {
                            // user updated
                            // get updated user data
                            const selectSql = "SELECT * FROM app_users WHERE id = ?";
                            db.query(selectSql, [id], (err, result) => {
                                // generate access token
                                const token = jwt.sign({ id }, process.env.ACCESS_TOKEN, {
                                    expiresIn: 4 * 24 * 60 * 60,
                                });

                                // deletes password and add token to results before returning the data
                                delete result[0].password;
                                result[0].token = token;
                                return res.json({ auth: true, result: result });
                            });
                        }
                    });
                });
            }
        }
    });
});
//====== end update user


// update user password
app.post('/reset/password', (req, res) => {
    const {password, email } = req.body;

        // Hash the new password before updating it
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                return res.json({ message: 'Error hashing password' });
            }
        // update user password
        const sql = "UPDATE app_users SET password = ? WHERE email = ?";
        db.query(sql, [hashedPassword,email], (err, result) => {
            if(err) {
                return res.status(500).json({ message: 'Internal server error' });
            } else {
                console.log('Password updated')
                return res.json(result);
            }
        })
    })
});
//=== update user password END===

// checks for user email when reseting password
app.get('/check', (req, res) => {
    const {email} = req.query;

    const checkSql = "SELECT * FROM app_users WHERE email = ?";
    db.query(checkSql, [email], (err, result) => {
        if (err) {
            // Handle the database error
            return res.status(500).json({ error: 'Database error' });
          }
      
          // Check if the email exists and belongs to a user other than the specified id
          if (result.length > 0) {
            // user email is valid
            return res.json({ exists: true });
          } else {
            // email is not in the database or belongs to the specified id
            return res.json({ exists: false });
          }
    }) 
});
//==== checks for user email when reseting password END===

// register user 
app.post('/api/register', (req, res) => {
    const {first_name, last_name, email, password} = req.body;
      // Perform input validation
     if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check if the user already exists
    const checkSql = "SELECT * FROM app_users WHERE email = ?";
    db.query(checkSql, [email], (err, result) => {
        if (err) {
            console.error('Error executing the query: ' + err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (result.length > 0) {
            return res.json({ message: 'User already exists' });
        }

        // Hash the new password before registering the user
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                console.error('Error hashing password: ' + err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            // Register new user with hashed password
            const sql = "INSERT INTO app_users(first_name, last_name, email, password) VALUES (?, ?, ?, ?)";
            db.query(sql, [first_name, last_name, email, hashedPassword], (err, insertResult) => {
                if (err) {
                    console.error('Error registering user: ' + err);
                    return res.status(500).json({ message: 'Internal server error' });
                }

                // User created, get the new user data
                const selectSql = "SELECT * FROM app_users WHERE email = ?";
                db.query(selectSql, [email], (err, selectResult) => {
                    if (err) {
                        console.error('Error retrieving user data: ' + err);
                        return res.status(500).json({ message: 'Internal server error' });
                    }

                    const id = selectResult[0].id;
                    // generate access token
                    const token = jwt.sign({ id }, process.env.ACCESS_TOKEN, {
                        // 4 days
                        expiresIn: 4 * 24 * 60 * 60,
                    });

                    // deletes password and add token to results before returning the data
                    delete selectResult[0].password;
                    selectResult[0].token = token;

                    // create data table for new user
                    const year = new Date().getFullYear();
                    const userId = selectResult[0].id;
                    const insertSql = `INSERT INTO user_stats (year, userid) VALUES (?, ?)`;
                    db.query(insertSql, [year, userId], (err, resultInsert) => {
                        if (err) {
                            console.error('Error creating user stats: ' + err);
                            return res.status(500).json({ message: 'Internal server error' });
                        }

                        return res.json({ auth: true, result: selectResult });
                    });
                });
            });
        });
    });
});
// register user End====

// skills query's
// add skills
app.post('/add-skill', verify, (req,res) => {
    skillsDB.createSkill(req,res,db);
});
// get all skills
app.get('/get-skills/:userId', (req,res) => {
    skillsDB.showSkill(req,res,db);
});
// delete skills
app.delete('/skills/:id', verify, (req,res) => {
    skillsDB.deleteSkill(req,res,db);
});
// edit skills
app.patch('/skills/:id', verify, (req,res) => {
    skillsDB.editSkill(req,res,db);
});
// show stats
app.get('/get-stats/:userId', (req,res) => {
    skillsDB.showStats(req,res,db);
});
// log hours
app.patch('/log', (req,res) => {
    skillsDB.logHours(req,res,db);
});
// reset chart
app.patch('/reset', (req,res) => {
    skillsDB.resetChart(req,res,db);
});
// skills query's END====

// password reset
app.post("/send_recovery_email", (req, res) => {
    resetPassword.sendEmail(req, res)
      .then((response) => res.send(response))
      .catch((error) => res.status(500).send(error.message));
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// The catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(8000, () => {
    console.log('server started')
})