const { sql } = require("../config/database");

async function getAllEquipment(req, res) {

    try {

        const result = await sql.query("SELECT * FROM Equipment");

        res.json(result.recordset);

    }

    catch (err) {

        res.status(500).json(err);

    }

}

async function getEquipmentById(req, res) {

    try {

        const id = req.params.id;

        const result = await sql.query`
            SELECT *
            FROM Equipment
            WHERE EquipmentId = ${id}
        `;

        if (result.recordset.length === 0) {
            return res.status(404).json({
                message: "Equipment not found"
            });
        }

        res.json(result.recordset[0]);

    }
    catch (err) {

        res.status(500).json(err);

    }

}

async function addEquipment(req, res) {

    try {

        const {

            EquipmentName,
            EquipmentType,
            Quantity,
            Status,
            PurchaseDate

        } = req.body;

        await sql.query`

        INSERT INTO Equipment

        (
            EquipmentName,
            EquipmentType,
            Quantity,
            Status,
            PurchaseDate
        )

        VALUES

        (
            ${EquipmentName},
            ${EquipmentType},
            ${Quantity},
            ${Status},
            ${PurchaseDate}

        )
        `;

        res.json({

            message: "Equipment Added Successfully"

        });

    }

    catch (err) {

        res.status(500).json(err);

    }

}

async function updateEquipment(req, res) {

    try {

        const id = req.params.id;

        const {

            EquipmentName,
            EquipmentType,
            Quantity,
            Status,
            PurchaseDate

        } = req.body;

        await sql.query`

        UPDATE Equipment

        SET

        EquipmentName=${EquipmentName},

        EquipmentType=${EquipmentType},

        Quantity=${Quantity},

        Status=${Status},

        PurchaseDate=${PurchaseDate}

        WHERE EquipmentId=${id}

        `;

        res.json({

            message: "Equipment Updated"

        });

    }

    catch (err) {

        res.status(500).json(err);

    }

}

async function searchEquipment(req, res) {

    try {

        const name = req.query.name;

        const result = await sql.query`
            SELECT *
            FROM Equipment
            WHERE EquipmentName LIKE ${'%' + name + '%'}
        `;

        res.json(result.recordset);

    }
    catch (err) {

        res.status(500).json(err);

    }

}

async function filterEquipment(req, res) {

    try {

        const status = req.query.status;

        const result = await sql.query`
            SELECT *
            FROM Equipment
            WHERE Status = ${status}
        `;

        res.json(result.recordset);

    }
    catch (err) {

        res.status(500).json(err);

    }

}

async function deleteEquipment(req, res) {

    try {

        const id = req.params.id;

        await sql.query`

        DELETE FROM Equipment

        WHERE EquipmentId=${id}

        `;

        res.json({

            message: "Equipment Deleted"

        });

    }

    catch (err) {

        res.status(500).json(err);

    }

}

module.exports = {

    getAllEquipment,

    getEquipmentById,

    addEquipment,

    updateEquipment,

    searchEquipment,

    filterEquipment,

    deleteEquipment

};