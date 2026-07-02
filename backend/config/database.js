const sql = require("mssql");
require("dotenv").config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,

    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

async function connectDB() {

    try {

        await sql.connect(config);

        console.log("✅ SQL Server Connected");

    }
    catch (err) {

        console.log("❌ Database Connection Failed");
        console.log(err);

    }

}

module.exports = {
    sql,
    connectDB
};