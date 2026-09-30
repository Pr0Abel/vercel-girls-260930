/**
 * REST API endpoint
 * /api/girls.js
 */
import mysql from "mysql2"

export const conn = mysql.createConnection({
    host:process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

export default async function handler(req, res) {
    console.log("Called /api/girls.js");
    
    switch (req.method) {
        case "GET":
            const data = [
                { id: 1, name: "Lili" },
                { id: 2, name: "Orália" },
                { id: 3, name: "Anasztázia" },
            ];
            return res.status(200).json({result: data});
            
        default:
            return res.status(405).json({ error: "Method not allowed" });
    }
}