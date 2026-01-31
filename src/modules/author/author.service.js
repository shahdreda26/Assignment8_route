import {db} from "../../database/connection.js"

export const implicit = async(data)=>{
    try {
         let author = await db.collection("authors").insertOne(data)
         console.log(author)
            if(author){
                return{message:"author added successfully",data}
            }else{
              return {message:"author added failed"}
            }
    } catch (error) {
        throw new Error(error.message);
         
    }
   
}