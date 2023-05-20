import mongoose, { Schema, ObjectId  } from "mongoose";
import isEmail from 'validator/lib/isEmail.js'

const Student = mongoose.model('Student',
    new Schema({
        id: {type: ObjectId},
        name: {
            type: String,
            required: true, // Not Null,
            validate: {
                validator: (value) => value.length > 3,
                message: 'Username must be at least 3 character'
            }
        },
        email: {
            type: String,
            validate: {
                validator: (value) => isEmail,
                message: 'Username must be at least 3 character'
            }
        },
        languages: {
            type: [String]
        },
        gender: {
            type: String,
            enum: {
                values: ['Male','Female'],
                message: '{VALUE} is not supported'
            },
            required: true
        },
        phoneNumber: {
            type: String,
            required: true,
            validate: {
                validator: (phoneNumber) => phoneNumber.length > 5,
                message: 'Phone number must be at least 5 characters'
            }
        },
        address: {
            type: String,
            required: true
        }
    }, {
        autoCreate: false,
        autoIndex: true
    })
)

export default Student;