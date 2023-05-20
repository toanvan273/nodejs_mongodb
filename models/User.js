import mongoose, { Schema, ObjectId  } from "mongoose";
import isEmail from 'validator/lib/isEmail.js'

export default mongoose.model('User',
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
        password: {
            //hashed/encrypted password
            type: String,
            required: true,
            //validate ??
        },
        phoneNumber: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        }
    })
)