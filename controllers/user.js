import { validationResult} from 'express-validator'


const login = async (req, res) =>  {
    const {email, password} = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    res.send('POST LOGIN USER')
}


const register = async (req, res) => {
    res.send('REGISTER USER')
}

const getDetailUser = async (req, res) => {
    res.send('Detail USER')
}

export default {
    login,
    register,
    getDetailUser
}