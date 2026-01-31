import { implicit } from "./author.service.js";

import express from "express"

const authorRouter =express.Router()

authorRouter.post("/add_authors",async(req,res)=>{
    let add_author = await implicit(req.body)
    res.json(add_author)
})


export default authorRouter