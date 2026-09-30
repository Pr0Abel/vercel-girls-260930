/**
 * REST API endpoint
 * /api/girls.js
 */

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