import HttpStatusCode from "../exceptions/HttpStatusCode.js"
import { MAX_RECORDS } from "../global/constants.js"
import { studentRepository } from "../repositories/index.js"

async function getAllStudents(req, res) {
    let {page = 1, size = MAX_RECORDS, searchString = ""} = req.query
    size = parseInt(size) <= MAX_RECORDS ? size : MAX_RECORDS
    try {
        const filteredStudents = await studentRepository.getAllStudents({size,  page , searchString})
        res.status(HttpStatusCode.OK).json({
            message:'Get students successfully',
            size: filteredStudents.length,
            searchString,
            page: parseInt(page) ,
            data: filteredStudents,
           
        })
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: error.message,
            error: error
        })
    }
    
 
}

async function getStudentByID(req, res){
    const id = req?.params?.id || ""
    try {
        const student = await studentRepository.getDetailStudent(id)
        res.status(HttpStatusCode.OK).json({
            message:'Get student by ID successfully',
            data: student,
           
        })

    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: error.message,
            error: error
        })
    }
}

async function updateStudent(req, res){
    try {
        const student = await studentRepository.updateStudent(req.body)
        res.status(HttpStatusCode.OK).json({
            message:'Update student successfully',
            data: student,
        })

    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: error.message,
            error: error
        })
    }
}

async function insertStudent(req, res){
 
    try {
        const student = await studentRepository.insertStudent(req.body);
        // console.log('insert ok', student);
        res.status(HttpStatusCode.INSERT_OK).json({
            message: 'Insert student successfully',
            data: student
        })
    } catch (error) {
        // console.log(JSON.stringify(error))
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: "Can not insert student"+error,
            validationErrors: error.validationErrors
        })
    }
}

async function generateFakerStudent(req, res){
    await studentRepository.generateFakerStudent(req.body)
    res.status(HttpStatusCode.INSERT_OK).json({
        message: 'Insert fake student successfully',
    })
}

export default {
    getAllStudents,
    getStudentByID,
    updateStudent,
    insertStudent,
    generateFakerStudent
}