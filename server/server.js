const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());  

app.get('/api', (req, res) => {
    res.json({'users': ['userOne', 'userTwo', 'userThree']})
})

app.listen(8000, () => {
    console.log('server started')
})