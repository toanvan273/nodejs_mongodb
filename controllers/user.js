import { validationResult} from 'express-validator'
import {
    userRepository
} from '../repositories/index.js'
import {EventEmitter} from 'node:events'
const myEvent = new EventEmitter()
myEvent.on('event.register.user', (params)=>{
    console.log(`They talked about : ${JSON.stringify(params)}`)
})
const login = async (req, res) =>  {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const {email, password} = req.body;
    // call repository
    await userRepository.login({email,password})
    res.status(200).json({
        message: 'User login successfully',
        data: []
    })
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
    await userRepository.register({email,password,name,phoneNumber,address})

    // Event Emiter
    myEvent.emit('event.register.user', {
        email, 
        password,
        name,
        phoneNumber,
        address
    })
    res.status(201).json({
        message: 'Register login successfully'
    })
}

const getDetailUser = async (req, res) => {
    res.send('Detail USER')
}

export default {
    login,
    register,
    getDetailUser
}