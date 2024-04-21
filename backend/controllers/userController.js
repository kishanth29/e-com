import User from "../models/useModels.js";
import asynchandler from "../middlewars/asyncHandler.js";



const createUser = asynchandler(async(req , res ) => {
    res.send("Hello");
});

export {createUser};