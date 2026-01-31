import express from "express"
import {databaseConnection} from "./database/connection.js"
import authorRouter from "../src/modules/author/author.controller.js"
import booksRouter from "../src/modules/book/book.controller.js"
import logsRouter from "../src/modules/logs/logs.controller.js"

export const bootstrap=async()=>{

    const app = express()
    app.use(express.json())
    app.use('/author',authorRouter)
    app.use('/collection',booksRouter)
    app.use('/collection',logsRouter)



    await databaseConnection()
    const error =(error,req,res,next)=>{
        res.json({message:error.message,stack:error.stack})
    }
    app.use(error)

    app.listen(3000,()=>{
        console.log("server running successfully") 
    })
}