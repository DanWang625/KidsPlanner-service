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
        title: { type: String, required: true },
        description: { type: String },
        completed: { type: Boolean, default: false }
      }],
}, {
    timestamps: true
})

export default model('Plan', PlanSchema)
