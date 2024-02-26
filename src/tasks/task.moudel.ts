import { Schema, model, Types } from "mongoose";


const TaskSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Finished'],
        require: true,
    },
    points: {
        type: Number,
        require: true,
    },
    user: {
        type: Types.ObjectId,
        ref: "User",
        require: true
    }
}, {
    timestamps: true
})

export default model('Task', TaskSchema)
