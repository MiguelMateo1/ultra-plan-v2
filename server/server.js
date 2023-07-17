const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const skillsDB = require('./skillsDB.js');
require('dotenv').config();

const app = express();
app.use(cors());  
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
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
    const sql = "SELECT * FROM app_users WHERE email = ? AND password = ?";

    db.query(sql, [email, password], (err, result) => {
        if(err) {
            console.error('Error executing the query: ' + err);
            return res.status(500).json({message: "'Internal server error"})
        }
        if (result.length > 0) {
            // User exists
            const id = result[0].id
            // generate access token
            const token = jwt.sign({id}, process.env.ACCESS_TOKEN, {
                expiresIn: 3000,
            });
            
            delete result[0].password
            result[0].token = token
            return res.json({auth: true, result: result});
          } else {
            return res.json({auth: false, message: 'Invalid email or password' });
          }
    })
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
                // req.user = user.id;
                next();
            }
        })
    }
};
// token verify func END

// update user
app.post('/update', verify , (req, res) => {
    const {first_name, last_name, email, password, id} = req.body;

    // checks if new email exist
    const checkSql = "SELECT * FROM app_users WHERE email = ?";
    db.query(checkSql, [email], (err, result) => {
        
        const newUserId = result[0].id
        if (newUserId != id) {
            return res.json({ message: 'User already exists' });
         // checks if user  emailexist END====

        } else {
            // update new user info
            const sql = "UPDATE app_users SET first_name = IF(?='', first_name, ?), last_name = IF(?='', last_name, ?), email = IF(?='', email, ?), password = IF(?='', password, ?) WHERE id = ?";
            db.query(sql, [first_name, first_name, last_name, last_name, email, email, password, password, id], (err, result) => {
                if(err) {
                    return res.json({message: "error"})
                } else {
                    // user updated 
                    // get updated user data
                    const sql = "SELECT * FROM app_users WHERE id = ?";
                        db.query(sql, [id], (err, result) => {
                        // generate access token
                        const token = jwt.sign({id}, process.env.ACCESS_TOKEN, {
                            expiresIn: 300,
                        });
                        
                        // deletes password and add token to results before returning the date
                        delete result[0].password
                        result[0].token = token
                    return res.json({auth: true, result: result});
                    })
                }
            })
        }
    })
});
//====== end update user

// register user 
app.post('/api/register', (req, res) => {
    const {first_name, last_name, email, password} = req.body;

    // checks if user exist
    const checkSql = "SELECT * FROM app_users WHERE email = ?";
    db.query(checkSql, [email,], (err, result) => {
        if (result.length > 0) {
            return res.json({ message: 'User already exists' });
     // checks if user exist END====

        } else {
            // register new user
            const sql = "INSERT INTO app_users(first_name, last_name, email, password) VALUES (?,?,?,?)";
            db.query(sql, [first_name, last_name ,email, password], (err, result) => {
                if(err) {
                    return res.json({message: "error"})
                } else {
                    // user created 
                    // get new user data
                    const sql = "SELECT * FROM app_users WHERE email = ? AND password = ?";
                    db.query(sql, [email,password], (err, result) => {

                        const id = result[0].id
                        // generate access token
                        const token = jwt.sign({id}, process.env.ACCESS_TOKEN, {
                            expiresIn: 300,
                        });
                    
                        // deletes password and add token to results before returning the date
                        delete result[0].password
                        result[0].token = token
                        return res.json({auth: true, result: result});
                    })
                }
            })
        }
    })
});
// register user End====

// add skills
app.post('/add-skill', verify, (req,res) => {
    skillsDB.createSkill(req,res,db);
});
// get all skills
app.get('/get-skills', (req,res) => {
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
app.get('/skills/stats', (req,res) => {
    skillsDB.showStats(req,res,db);
});


app.listen(8000, () => {
    console.log('server started')
})