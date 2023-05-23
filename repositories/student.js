import Exception from "../exceptions/Exception.js"
import { Student } from "../models/index.js"

const getAllStudents = async ({
    page,
    size,
    searchString
}) => {
    console.log('Get all student + paging')
}

const insertStudent = async ({
    name, 
    email, 
    languages, 
    gender, 
    phoneNumber, 
    address
}) => {
    try {
        console.log('Insert student')
        const student = await Student.create({
        name, 
        email, 
        languages, 
        gender, 
        phoneNumber, 
        address
        })
        // debugger
        // return student
    } catch (error) {
        // debugger
        console.log(error);
        throw new Exception(error.message)
    }
}

export default {
    getAllStudents,
    insertStudent
}