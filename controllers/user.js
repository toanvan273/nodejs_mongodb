import { validationResult} from 'express-validator'
import {
    userRepository
} from '../repositories/index.js'
import {EventEmitter} from 'node:events'
import HttpStatusCode from '../exceptions/HttpStatusCode.js'

const myEvent = new EventEmitter()
myEvent.on('event.register.user', (params)=>{
    console.log(`They talked about : ${JSON.stringify(params)}`)
})

const login = async (req, res) =>  {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(HttpStatusCode.BAD_REQUEST).json({
            errors: errors.array()
        })
    }
    const {email, password} = req.body;
    // call repository
    try {
        const exitingUser =  await userRepository.login({email,password})
        res.status(HttpStatusCode.OK).json({
            message: 'User login successfully',
            data: exitingUser
        })
    } catch (error) {
        console.log(error);
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: error.toString()
        })
    }
   
}


const register = async (req, res) => {
    // destructuring
    const {
        email, 
        password,
        name,
        phoneNumber,
        address
    } = req.body
    // Event Emiter
    myEvent.emit('event.register.user', {
        email, 
        password,
        name,
        phoneNumber,
        address
    })
    try {
        const user = await userRepository.register({email,password,name,phoneNumber,address})
        res.status(HttpStatusCode.INSERT_OK).json({
            message: 'Register login successfully',
            data: user
        })
    } catch (error) {
        console.log(error);
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: error.toString()
        })
    }
}

const getDetailUser = async (req, res) => {
    res.send('Detail USER')
}

export default {
    login,
    register,
    getDetailUser
}