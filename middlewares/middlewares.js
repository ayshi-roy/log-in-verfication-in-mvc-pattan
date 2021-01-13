const jwt = require("jsonwebtoken");

module.exports.isAuthenticated = async (req, res, next) => {
    try {
        const verified = await jwt.verify(req.headers.token, "secret");
        console.log('JWT',verified);
        if(!verified){
            return res.status(400).json({error: true, data: null, token: null, message:'user not authenticate'})
        }
        next();
    }catch (e) {
        console.error(e);
        return res.status(500).json({ error: e.message, data: undefined, token: undefined, message: "something went wrong"
        });
    }    
}