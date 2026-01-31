
import {db} from "../connection.js"


export const bookModel = db.collection("books",{validator:{$jsonSchema:{required:["title"]}}})//db.createCollection("books")