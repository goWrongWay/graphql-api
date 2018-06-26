import mongoose from "mongoose";
const Schema = mongoose.Schema;
const scoreSchema = new Schema(
    {
        uid: {
            type: String,
            required: true,
        },
        eid: {
            type: String,
            required: true,
        },
        aid: {
            type: String,
            required: true,
        },
        goal: {
            type: String,
            required: true,
        },
        time: {
            type: String,
        }
    },
    { collection: "score", timestamps: true }
);

export default mongoose.model('score', scoreSchema)
