import  jwt  from "jsonwebtoken";

const protect = async (req, res, next) => {
    //get token from header
    const secret = "project_odc";
     const token = req.headers.authorization;
     try {
        if(token){
            const splitToken = token.split(" ")[1];
            const decoded = jwt.verify(splitToken, secret);
            const { id } = decoded;
            req.user = { id };
            next();
        }
        else{
            res.status(401).json({ message: "Unauthorized"});
        }
     } catch (error) {
         res.status(401).json({ message: "Unauthorized", error: error.message });
     }
 
 }
export default protect
