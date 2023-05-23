import mongoose, { Schema, ObjectId  } from "mongoose";
import isEmail from 'validator/lib/isEmail.js'
// import isMobilePhone from 'validator/lib/isMobilePhone.js'
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
                validator: (value) => isEmail(value),
                message: 'Email must be right format'
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
                validator: (phoneNumber) => {
                    return phoneNumber.length > 5 && phoneNumber.length <=20 
                },
                message: 'Phone number must be at least 5 characters, max:20, must be right format'
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