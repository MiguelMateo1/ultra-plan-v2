
//  add skill 
function createSkill (req, res, db) {
    const {skill_name, total_hours, days_per_week, hour_per_day, userId} = req.body;

        const sql = "INSERT INTO user_skills(skill_name, total_hours, days_per_week, hour_per_day, userId) VALUES (?,?,?,?,?)";
        db.query(sql, [skill_name, total_hours ,days_per_week, hour_per_day, userId], (err, result) => {
            if(err) {
                return res.json({erros: err, message: "error"})
            } else {
                return res.json({auth: true, result: result});
            }
        })
};

//  add skill End===


module.exports = {createSkill}
