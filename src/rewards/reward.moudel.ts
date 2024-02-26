import { Schema, Types, model } from "mongoose";

const RewardSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },

    costs: {
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

export default model('Reward', RewardSchema)
