import {indexing,add_book,find_int,delete_book,aggregate4_filter,aggregate3_filter,aggregate2_filter,aggregate1_filter,find_notin,find_all_book,find_genres,find_skip,find_book,add_many_book,update_book} from "./book.service.js"

import express from "express"
const booksRouter = express.Router()

booksRouter.post("/indexing",async(req,res)=>{
    let index= await indexing(req.body)
    res.json(index)
})

booksRouter.post("/book",async(req,res)=>{
    let book= await add_book(req.body)
    res.json(book)
})

booksRouter.post("/many_book",async(req,res)=>{
    let books= await add_many_book(req.body)
    res.json(books)
})

booksRouter.patch("/updateBook",async(req,res)=>{
    let updateBook= await update_book(req.body)
    res.json(updateBook)
})

booksRouter.get("/find_book_title",async(req,res)=> {
    let title_book=await find_book(req.query)
    res.json(title_book)
})

booksRouter.get("/find_all_book",async(req,res)=> {
    let all_book=await find_all_book(req.query)
    res.json(all_book)
})

booksRouter.get("/find_genres_book",async(req,res)=> {
    let genres_book=await find_genres(req.query)
    res.json(genres_book)
})

booksRouter.get("/find_skip_book",async(req,res)=> {
    let skip_book=await find_skip()
    res.json(skip_book)
})

booksRouter.get("/year-integer",async(req,res)=> {
    let int_book=await find_int()
    res.json(int_book)
})

booksRouter.get("/exclude-genres",async(req,res)=> {
    let exclude=await find_notin(req.body)
    res.json(exclude)
})

booksRouter.delete("/before_year",async(req,res)=> {
    let deleted_book=await delete_book(req.query)
    res.json(deleted_book)
})

booksRouter.get("/aggregate1",async(req,res)=> {
    let agg1=await aggregate1_filter(req.body)
    res.json(agg1)
})

booksRouter.get("/aggregate2",async(req,res)=> {
    let agg2=await aggregate2_filter(req.body)
    res.json(agg2)
})

booksRouter.get("/aggregate3",async(req,res)=> {
    let agg3=await aggregate3_filter(req.body)
    res.json(agg3)
})

booksRouter.get("/aggregate4",async(req,res)=> {
    let agg4=await aggregate4_filter()
    res.json(agg4)
})

export default booksRouter