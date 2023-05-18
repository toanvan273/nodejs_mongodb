

const login = async ({email, password}) => {
    console.log('login user in user repository')
}
const register = async ({
    email, 
    password,
    name,
    phoneNumber,
    address
}) => {
    // validation already done
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