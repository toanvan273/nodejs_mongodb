import Exception from "../exceptions/Exception.js"
import { OutputType, print } from "../helpers/print.js"
import {User} from '../models/index.js'

const login = async ({email, password}) => {
    print('login user in user repository', OutputType.INFORMATION)
}
const register = async ({
    email, 
    password,
    name,
    phoneNumber,
    address
}) => {
    // validation already done
    try {
        let exitingUser = User.findOne({email}).exec()
        if(!!exitingUser){
            throw new Exception(Exception.USER_EXIT)
        }
        //encrypt password
    } catch (error) {
        
    }
    console.log('Register user in user repository', 
    email, 
    password,
    name,
    phoneNumber,
    address)
}

export default {
    login,
    register
}