import { Schema, model } from "mongoose";


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
    }
}, {
    timestamps: true
})

export default model('Task', TaskSchema)
