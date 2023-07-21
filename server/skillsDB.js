
//  add skill 
function createSkill (req, res, db) {
    const {skill_name, total_hours, days_per_week, hour_per_day, userId, skill_icon} = req.body;

        const sql = "INSERT INTO user_skills(skill_name, total_hours, days_per_week, hour_per_day, userId, icon) VALUES (?,?,?,?,?,?)";
        db.query(sql, [skill_name, total_hours ,days_per_week, hour_per_day, userId, skill_icon], (err, result) => {
            if(err) {
                return res.json({error: err, message: "error"})
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
                return res.json({error: err, message: "error"})
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
                return res.json({error: err, message: "error"})
            } else {
                return res.json(result);
            }
        })
};
//  delete skills End===

//  edit skills
function editSkill (req, res, db) {
    const {id} = req.params;
    const {skill_name, total_hours, days_per_week, hour_per_day, skill_icon} = req.body;
    
    const sql = "UPDATE user_skills SET skill_name = ?, total_hours = ?, days_per_week = ?, hour_per_day = ?, completed_hours = completed_hours, icon = ? WHERE id = ?";
    const values = [skill_name, total_hours, days_per_week, hour_per_day, skill_icon, id];
        db.query(sql, values ,(err, result) => {
            if(err) {
                return res.json({error: err, message: "error"})
            } else {
                return res.json(result);
            }
        })
};
//  edit skill End===

//  get stats 
function showStats (req, res, db) {
    const {userid} = req.headers

        const sql = "SELECT * FROM `user_stats` WHERE userId = ?";
        db.query(sql,[userid] ,(err, result) => {
            if(err) {
                return res.json({error: err, message: "error"})
            } else {
                return res.json(result);
            }
        })
};
//  get stats End===

//  insert or created user_stats data and logs/update skill hours
function logHours(req, res, db) {
    const { hour, id, month, userId, year } = req.body;

    // Check if data exists for the selected year and userId
    const checkSql = "SELECT * FROM user_stats WHERE year = ? AND userid = ?";
    db.query(checkSql, [year, userId], (err, resultCheck) => {
        if (err) {
            return res.json({ error: err, message: "error" });
        } else {
            if (resultCheck.length === 0) {
                // No data found for the current year and userId, so insert a new record
                const insertSql = `INSERT INTO user_stats (year, userid, ${month}) VALUES (?, ?, ?)`;
                db.query(insertSql, [year, userId, hour], (err, resultInsert) => {
                    if (err) {
                        return res.json({ error: err, message: "error updating user stats" });
                    } else {
                        // Record inserted successfully, now update user_skills and user_stats
                        updateSkillsAndStats(hour, id, month, userId, year, db, res);
                    }
                });
            } else {
                // Data exists, proceed with the update
                updateSkillsAndStats(hour, id, month, userId, year, db, res);
            }
        }
    });
}

function updateSkillsAndStats(hour, id, month, userId, year, db, res) {
    // logs/add hours to the selected skill
    const sql = "UPDATE user_skills SET completed_hours = completed_hours + ? WHERE id = ?";
    db.query(sql, [hour, id], (err, result) => {
        if (err) {
            return res.json({ error: err, message: "error" });
        } else {
            // updates stats to display in chart and stats area
            const sql2 = `UPDATE user_stats SET ${month} = ${month} + ? WHERE userid = ? AND year = ?`;
            db.query(sql2, [hour, userId, year], (err, result2) => {
                if (err) {
                    return res.json({ error: err, message: "error" });
                } else {
                    return res.json(result2);
                }
            });
        }
    });
}
// insert or created user_stats data and logs/update skill hour log END===

//  reset chart
function resetChart(req, res, db) {
    const { userId } = req.body;

    if (!userId) {
        return res.status(400).json({ message: "userId is missing in the request body." });
      }

      const sql = `UPDATE user_stats SET jan=0, feb=0, mar=0, apr=0, may=0, jun=0, jul=0,
        aug=0, sep=0, oct=0, nov=0, \`dec\`=0 WHERE userid = ?`;
    db.query(sql, [userId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message, message: "Error resetting chart hours" });
        } else {
            return res.json(result);
        }
    });
}
//  reset chart End===



module.exports = {createSkill,showSkill,deleteSkill,editSkill,showStats, logHours, resetChart}
