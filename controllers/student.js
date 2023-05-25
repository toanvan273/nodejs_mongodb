import HttpStatusCode from "../exceptions/HttpStatusCode.js"
import { studentRepository } from "../repositories/index.js"

async function getAllStudents(req, res) {
    // res.send('getAllStudents')
    res.status(HttpStatusCode.OK).json({
        message:'Get students successfully',
        data: [
            {
                name: 'Nguyen Van A',
                age: 19
            }
        ]
    })
    // res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
    //     message: 'Can not get students'
    // })
}

async function getStudentByID(req, res){
    res.send('get student by ID:' + req?.params?.id ?? "")
}

async function updateStudent(req, res){
    res.send('patch(new user of not exit) insert student')
}

async function insertStudent(req, res){
 
    try {
        const student = await studentRepository.insertStudent(req.body);
        res.status(HttpStatusCode.INSERT_OK).json({
            message: 'Insert student successfully',
            data: student
        })
    } catch (error) {
        console.log(JSON.stringify(error))
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: "Can not insert student"+error,
            validationErrors: error.validationErrors
        })
    }
}

export default {
    getAllStudents,
    getStudentByID,
    updateStudent,
    insertStudent
}