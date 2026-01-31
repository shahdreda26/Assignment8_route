import {logsModel} from "../../database/models/logs.model.js"

export const add_log= async(data)=>{
    try {
        let logs = await logsModel.insertOne(data)
        if(logs){
            return{message:"book added successfully",data}
        }else{
            return {message:"book added failed"}
            }
    } catch (error) {
        return {message:error.message}
    }
    
}