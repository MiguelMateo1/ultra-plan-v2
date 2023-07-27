const jwt = require('jsonwebtoken');

// Middleware function checks if the user is a demo user
const isDemoUser = (req, res, next) => {
    const demoId = 1; 
    const demoSkillsId = 3

    const id = req.body.id; 
    const skillId = req.params.id;
    const userId = req.body.userId;
  
    if (id == demoId || id < demoSkillsId || userId == demoId || skillId <= demoSkillsId) {
      return res.json({ message: 'demo' });
    }

    // If the user is not a demo user, proceed 
    next();
  };

  // Token verify func
const verify = (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
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
// Token verify func END
  
module.exports = { verify, isDemoUser };