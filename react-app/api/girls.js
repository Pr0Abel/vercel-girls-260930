/**
 * REST API endpoint
 * /api/girls.js
 */

export default async function handler(req, res) {
    console.log("Called /api/girls.js");
    
    return res.status(200).json("OK")
}