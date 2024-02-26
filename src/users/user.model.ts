import { model, Schema } from 'mongoose'

const UserSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    age: {
        type: Number,
        require: true,
    },
    password: {
        type: String,
        require: true,
        unique: true

    },
    points: {
        type: Number,
    }
}, {
    timestamps: true
})

export default model('User', UserSchema)
