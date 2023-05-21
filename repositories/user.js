import Exception from "../exceptions/Exception.js"
import { OutputType, print } from "../helpers/print.js"
import {User} from '../models/index.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const login = async ({email, password}) => {
    print('login user in user repository', OutputType.INFORMATION)
    const exitingUser = await User.findOne({email}).exec()
    if(exitingUser){
        // not encrypt password
        const isMatched = await bcrypt.compare(password, exitingUser.password)
        if(isMatched){
            // create Java web token
        const token = jwt.sign(
                {data: exitingUser}, 
                process.env.JWT_SECRET,
                {expiresIn: '10 days'} // expiresIn: '60'
            )

            // clone User add more property token
            return {
                ...exitingUser.toObject(),
                token,
                password: '******'
            }
        }else{
            throw new Exception(Exception.WRONG_EMAIL_AND_PASSWORD)
        }
    }else{
        throw new Exception(Exception.WRONG_EMAIL_AND_PASSWORD)
    }
}
const register = async ({
    email, 
    password,
    name,
    phoneNumber,
    address
}) => {
    // validation already done
    const exitingUser = await User.findOne({email}).exec()
    if(!!exitingUser){
        throw new Exception(Exception.USER_EXIT)
    }
    //encrypt password by bcrypt
    // 
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))
    // insert to db
    const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        phoneNumber,
        address
    })
    console.log('Check', newUser, newUser.toString())
    return {
        ...newUser._doc,
        password: '***'
    };
}

export default {
    login,
    register
}