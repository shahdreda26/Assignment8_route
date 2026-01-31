import {bookModel} from "../../database/models/book.model.js"
import {logsModel} from "../../database/models/logs.model.js"
export const  indexing =async(data)=>{
    try {
        let index = await bookModel.createIndex(data)
        if(index){
            return {message:"index created successfully",index}
        }else{
            return {message:"index created failing"}
        }
    } catch (error) {
        return {message:error.message}
    }   
}

export const  add_book =async(data)=>{
    try {
        
        let index = await bookModel.insertOne(data)
        if(index){
            return{message:"book added successfully",data}
        }else{
            return {message:"book added failed"}
            }
    } catch (error) {
        return {message:error.message}
    } 
}

export const  add_many_book =async(data)=>{
    try {
        let index = await bookModel.insertMany(data)
        if(index.insertedCount>0){
            return {message:"books added successfully",data}
        }else{
            return {message:"books not add",data}
        }
    } catch (error) {
        return {message:error.message}
    }
    
}

export const  update_book =async(data)=>{
    try {
        let{title,year}=data
        let index = await bookModel.updateOne({title:title},{$set:{year:year}}) 
        if(index.modifiedCount>0){
            return {message:"books updated successfully"}
        }else{
            return {message:"books not add"}
        }
    } catch (error) {
        return {message:error.message}
    }
    
}

export const find_book = async(data)=>{
    try {
        let {title}= data
        let book =await bookModel.findOne({title:title})
        if(book){
            return {message:"books",book}
        }else{
            return {message: "books not found"}
        }
    } catch (error) {
        return error.message
    }
}

export const find_all_book = async(data)=>{
    try {
        let {start_year,last_year}= data
        let book =await bookModel.find({year:{$gt:Number(start_year),$lt:Number(last_year)}}).toArray()
        if(book.length>0){
            return {message:"books",book}
        }else{
            return {message: "books not found"}
        }
    } catch (error) {
        return error.message
    }
}

export const find_genres = async(data)=>{
    try {
        let{genres}=data
        let book =await bookModel.find({genres:{$in:[genres]}}).toArray()
        if(book.length>0){
            return {message:"books",book}
        }else{
            return {message: "books not found"}
        }
    } catch (error) {
        return error.message
    }
}

export const find_skip = async()=>{
    try {
        let book =await bookModel.find().skip(2).limit(3).sort({year:-1}).toArray()
        if(book.length>0){
            return {message:"books",book}
        }else{
            return {message: "books not found"}
        }
    } catch (error) {
        return error.message
    }
}

export const find_int = async()=>{
    try {
        let book =await bookModel.find({year:{$type:16}}).toArray()
        if(book.length>0){
            return {message:"books",book}
        }else{
            return {message: "books not found"}
        }
    } catch (error) {
        return error.message
    }
}

export const find_notin = async(data)=>{
    try {
        let{genres}=data
        let book =await bookModel.find({genres:{$nin:[genres]}}).toArray()
        if(book.length>0){
            return {message:"books",book}
        }else{
            return {message: "books not found"}
        }
    } catch (error) {
        return error.message
    }
}

export const delete_book = async(data)=>{
    try {
        let{year}=data          
        let book =await bookModel.deleteMany({year:{$lt:Number(year)}})
        if(book.deletedCount > 0){
            return {message:"deleted books successfully"}
        }else{
            return {message: "books not found"}
        }
    } catch (error) {
        return error.message
    }
}

export const aggregate1_filter = async(data)=>{
    try {
        let{year}=data          
        let book =await bookModel.aggregate([
            {$match:{year:{$gt:Number(year)}}},
            {$sort: {year:-1}}
        ]).toArray()
        if(book.length > 0){
            return {message:"books found successfully",book}
        }else{
            return {message: "books not found"}
        }
    } catch (error) {
        return error.message
    }
}

export const aggregate2_filter = async(data)=>{
    try {
        let{year}=data          
        let book =await bookModel.aggregate([
            {$match:{year:{$gt:Number(year)}}},
            {$project: {_id:0,genres:0}}
        ]).toArray()
        if(book.length > 0){
            return {message:"books found successfully",book}
        }else{
            return {message: "books not found"}
        }
    } catch (error) {
        return error.message
    }
}

export const aggregate3_filter = async(data)=>{
    try {
        let{author}=data          
        let book =await bookModel.aggregate([
            {$match:{author:{$eq:author}}},
            {$project: {_id:0,title:1,genres:1}},
            {$unwind:"$genres"}
        ]).toArray()
        if(book.length > 0){
            return {message:"books found successfully",book}
        }else{
            return {message: "books not found"}
        }
    } catch (error) {
        return error.message
    }
}


export const aggregate4_filter = async()=>{
    try {
        let book =await bookModel.aggregate([
          {
            $lookup:{
                from:"books",
                localField:"books_id",
                foreignField:"_id",
                as:"book_details"
            }
          }
        ]).toArray()
        if(book.length > 0){
            return {message:"books found successfully",book}
        }else{
            return {message: "books not found"}
        }
    } catch (error) {
        return error.message
    }
}

