import Exception from "../exceptions/Exception.js"
import { print } from "../helpers/print.js"
import { Student } from "../models/index.js"
import {faker} from '@faker-js/faker'

const getAllStudents = async ({
    page,
    size,
    searchString
}) => {
    // aggregate data for all students
    page = parseInt(page)
    size = parseInt(size)
    // searchString? name, email, address contains searchString
    try {
        const filteredStudents = await Student.aggregate([
            {
                $match: {
                    $or: [
                        {
                            name: {$regex: `.*${searchString}.*`, $options: 'i'},  // ignore case
                        },
                        {
                            email: {$regex: `.*${searchString}.*`, $options: 'i'},  // ignore case
                        },
                        {
                            address: {$regex: `.*${searchString}.*`, $options: 'i'},  // ignore case
                        }
                    ]
                } // {} get all
            },
            {
                $skip: (page - 1) * size, // bo qua bao nhieu phan tu
            },
            {
                $limit: size, // Gioi han bao nhieu phan tu 
            }
        ])
        // console.log('students', filteredStudents)
        return filteredStudents
    } catch (error) {
        console.log(JSON.stringify(error))
        throw new Exception('Get list student error :(', error)
    }
}

const getDetailStudent = async (studentID) => {
    try {
        const student = await Student.findById(studentID)
        if(!student){
            throw new Exception('Can not get student by ID '+studentID)
        }
        return student
    } catch (error) {
        throw new Exception('Get student error :(', error)
    }
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
        const student = await Student.create({
        name, 
        email, 
        languages, 
        gender, 
        phoneNumber, 
        address
        })
        return student
    } catch (error) {
        // debugger
        if(!!error.errors){
            throw new Exception('Input error', error.errors)
        }
        
    }
}


const updateStudent = async ({
    id,
    name, 
    email, 
    languages, 
    gender, 
    phoneNumber, 
    address
}) => {
    try {
        const student = await Student.findById(id)
        student.name = name ?? student.name
        student.email = email ?? student.email
        student.languages = languages ?? student.languages
        student.gender = gender ?? student.gender
        student.phoneNumber = phoneNumber ?? student.phoneNumber
        student.address = address ?? student.address
        await student.save()
        return student
    } catch (error) {
        if(!!error.errors){
            throw new Exception(error.errors)
        }
    }
}


 const generateFakerStudent = async () => {
    [...Array(1000).keys()].forEach( async (index) => {
        const fakeStudent = {
            name: `${faker.person.fullName()}-fake`,
            email: faker.internet.email(),
            languages: [
                faker.helpers.arrayElement(['English', 'Vietnamese', 'French']),
                faker.helpers.arrayElement(['Korean', 'Japanese', 'Chinese']),
            ],
            gender: faker.helpers.arrayElement(['Male', 'Female']),
            phoneNumber: faker.phone.number(),
            address: faker.location.streetAddress()
        }
        await Student.create(fakeStudent)
        print(fakeStudent)
    })
}

export default {
    getAllStudents,
    insertStudent,
    generateFakerStudent,
    getDetailStudent,
    updateStudent
}