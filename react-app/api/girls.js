/**
 * REST API endpoint
 * /api/girls.js
 */

export default async function handler(req, res) {
    console.log("Called /api/girls.js");
    
    switch (req.method) {
        case "GET":
                return res.status(200).json("OK")
        
        default:
            return res.status(405).json({ error: "Method not allowed" });
    }
}