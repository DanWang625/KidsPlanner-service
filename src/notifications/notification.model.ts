import { Schema, Types, model } from "mongoose";

const NotificationSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: "User",
        require: true
    },
    message: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

export default model('Notification', NotificationSchema)
