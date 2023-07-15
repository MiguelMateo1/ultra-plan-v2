
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

//  delete skills 
function deleteSkill (req, res, db) {
    const {id} = req.params;
    
        const sql = "DELETE FROM user_skills WHERE id = ?";
        db.query(sql,[id] ,(err, result) => {
            if(err) {
                return res.json({erros: err, message: "error"})
            } else {
                return res.json(result);
            }
        })
};
//  delete skills End===

//  edit skills
function editSkill (req, res, db) {
    const {id} = req.params;
    const {skill_name, total_hours, days_per_week, hour_per_day, userId, skill_icon, completed_hours} = req.body;
    
    // const sql = "UPDATE user_skills SET first_name = IF(?='', first_name, ?), last_name = IF(?='', last_name, ?), email = IF(?='', email, ?), password = IF(?='', password, ?) WHERE id = ?";
    const sql = "UPDATE user_skills SET skill_name = ?, total_hours = ?, days_per_week = ?, hour_per_day = ?, completed_hours = ?, icon = ? WHERE id = ?";
    const values = [skill_name, total_hours, days_per_week, hour_per_day, completed_hours, skill_icon, id];
        db.query(sql, values ,(err, result) => {
            if(err) {
                return res.json({erros: err, message: "error"})
            } else {
                return res.json(result);
            }
        })
};
//  edit skill End===


module.exports = {createSkill,showSkill,deleteSkill,editSkill}
