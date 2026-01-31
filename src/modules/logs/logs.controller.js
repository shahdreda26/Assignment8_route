import express from "express"
const logsRouter = express.Router()
import {add_log} from "./logs.service.js"


logsRouter.post("/add_log",async(req,res)=>{
    let index= await add_log(req.body)
    res.json(index)
})

export default logsRouter