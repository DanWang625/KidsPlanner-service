import mongoose from "mongoose"

export async function initMongoose() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Dan_kids_planner_db')
        console.log('connection established')
    } catch (err) {
        console.log(err)
    }

}
