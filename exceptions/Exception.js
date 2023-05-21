import { OutputType, print } from "../helpers/print.js"

export default class Exception extends Error {
    static WRONG_DB_USERNAME_PASSWORD = "Wrong datatabase's username and password"
    static WRONG_CONNECTION_STRING = 'Wrong server name/connnection string'
    static CANNOT_CONNECT_MONGODB = "Can not connect to MongoDB"
    static USER_EXIT = "User already exits" 
    static CANNOT_REGISTER_USER = "Cannot register user"
    static WRONG_EMAIL_AND_PASSWORD = 'Wrong email or password'
    constructor(message){
        super(message) // call constructor of parent class (Error)
        print(message, OutputType.ERROR)
    }
}