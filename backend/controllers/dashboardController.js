const { sql } = require("../config/database");

async function getDashboard(req, res) {

    try {

        const result = await sql.query(`
            SELECT
                COUNT(*) AS TotalEquipment,
                SUM(CASE WHEN Status = 'Available' THEN 1 ELSE 0 END) AS Available,
                SUM(CASE WHEN Status = 'In Use' THEN 1 ELSE 0 END) AS InUse,
                SUM(CASE WHEN Status = 'Maintenance' THEN 1 ELSE 0 END) AS Maintenance
            FROM Equipment
        `);

        res.json(result.recordset[0]);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports = {
    getDashboard
};