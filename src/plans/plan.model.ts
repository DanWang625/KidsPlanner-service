import { Schema, model, Types } from "mongoose";


const PlanSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    tasks: [{
        title: { type: String, require: true },
        description: { type: String },
        status: {
            type: String,
            enum: ['Not Started', 'In Progress', 'Finished'],
            require: true,
        },
      }],
}, {
    timestamps: true
})

export default model('Plan', PlanSchema)
