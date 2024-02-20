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
    password: {
        type: String,
        require: true,
    },
    tasks: {
        type: Types.ObjectId,
        ref: 'tasks',
    },
    rewards: {
        type: Types.ObjectId,
        ref: 'rewards',
    },
    points: {
        type: Number,
    }
}, {
    timestamps: true
})

export default model('User', UserSchema)
