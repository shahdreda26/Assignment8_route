import { MongoClient } from 'mongodb';

  const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri);
  
export const db = client.db("assignment8")
export const databaseConnection=async()=> {
    await client.connect()
        .then(()=>{
                console.log("connection is successfully")
        })
        .catch(error=>{
            console.log(error)
        })

  
}
