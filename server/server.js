const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');
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
                expiresIn: 300,
            });
            
            delete result[0].password
            result[0].token = token
            return res.json({auth: true, result: result});
          } else {
            return res.json({ message: 'Invalid email or password' });
          }
    })
});
// login user End=========
 
// token verify fucn
const verify = (req, res, next) => {
    const token = req.headers['acces-token']

    if (!token) {
        res.send('no token')
    } else {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.json({auth: false, message: 'failed to authenticate'});
            } else {
                req.userId = decoded.id;
                next();
            }
        })
    }
}
// token verify fun END

app.get('/userAuth', verify , (req, res) => {
    res.send('authenticate verify seccess')
} )

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
                    console.log(result)
                    const id = result[0].id
                    // generate access token
                    const token = jwt.sign({id}, process.env.ACCESS_TOKEN, {
                        expiresIn: 300,
                    });
                
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

// test get user**
app.get('/:first_name', (req, res) => {
    const sqlSelect = "SELECT * FROM app_users WHERE email = ? AND first_name = ?";
    const val = req.params;

    db.query(sqlSelect, [val.first_name, val.email], (err, result) => {
        if(err) {
            return res.json({Message: "error error"})
        }
        return res.json(result);
    })
});

app.listen(8000, () => {
    console.log('server started')
})