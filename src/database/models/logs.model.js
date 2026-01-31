import {db} from "../connection.js"

export const logsModel = db.collection("logs",{capped:true,size:1024*1024})