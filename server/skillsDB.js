
//  add skill 
function createSkill (req, res, db) {
    const {skill_name, total_hours, days_per_week, hour_per_day, userId, skill_icon} = req.body;

        const sql = "INSERT INTO user_skills(skill_name, total_hours, days_per_week, hour_per_day, userId, icon) VALUES (?,?,?,?,?,?)";
        db.query(sql, [skill_name, total_hours ,days_per_week, hour_per_day, userId, skill_icon], (err, result) => {
            if(err) {
                return res.json({erros: err, message: "error"})
            } else {
                return res.json({auth: true, result: result});
            }
        })
};
//  add skill End===

//  show skills 
function showSkill (req, res, db) {
    const {userid} = req.headers

        const sql = "SELECT * FROM user_skills WHERE userId = ?";
        db.query(sql,[userid] ,(err, result) => {
            if(err) {
                return res.json({erros: err, message: "error"})
            } else {
                return res.json(result);
            }
        })
};
//  show skills End===


module.exports = {createSkill,showSkill}
