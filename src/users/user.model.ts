import { model, Schema, Types } from 'mongoose'

const UserSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    tasks: {
        type: [String],
        require: true,
    },
    rewards: {
        type: [String],
    },
    points: {
        type: [Number],
    }
}, {
    timestamps: true
})

export default model('User', UserSchema)
