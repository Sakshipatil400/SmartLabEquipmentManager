const { sql } = require("../config/database");

async function getDashboard(req, res) {

    try {

        const result = await sql.query(`
            SELECT
                COUNT(*) AS TotalEquipment,
               SUM(CASE WHEN Status='Active' THEN 1 ELSE 0 END) AS Active,
              SUM(CASE WHEN Status='Under Maintenance' THEN 1 ELSE 0 END) AS UnderMaintenance,
              SUM(CASE WHEN Status='Decommissioned' THEN 1 ELSE 0 END) AS Decommissioned
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