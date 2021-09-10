
import mongoose from "mongoose";

//Database Connection
const URL = "mongodb://localhost:27017/mongographql";

export const conectaDB = async () => {
    await mongoose.connect(
        URL, {useNewUrlParser: true})
        .then( ()=> console.log('conectado a db [OK]') )
        .catch( (e)=> console.log({error:e}) );

};
