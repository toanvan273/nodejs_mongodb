import mongoose from "mongoose";
import { OutputType, print } from "../helpers/print.js";
import Exception from "../exceptions/Exception.js";

mongoose.set('strictQuery', true)
const connect = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        print('Connection Mongoose successfully', OutputType.SUCCESS)
        // console.log()
    } catch (error) {
        const {code} = error;
        if(code == 8000){
            throw new Exception(Exception.WRONG_DB_USERNAME_PASSWORD)
        }
        if(code == 'ENODATA'){
            throw new Exception(Exception.WRONG_CONNECTION_STRING)
        }
        throw new Exception(Exception.CANNOT_CONNECT_MONGODB)
    }
}

export default connect  

// connect()