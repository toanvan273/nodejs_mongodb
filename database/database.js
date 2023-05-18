import mongoose from "mongoose";
mongoose.set('strictQuery', true)
const connect = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log('connection success')
    } catch (error) {
        console.log(error);
        const {code} = error;
        if(code == 8000){
            throw new Error('Wrong username and password')
        }
        if(code == 'ENODATA'){
            throw new Error('Wrong server name/connnection string')
        }
        throw new Error("Can not connect to MongoDB")
    }
}

export default connect  

// connect()