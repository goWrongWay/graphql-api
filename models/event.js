import mongoose from "mongoose";
const Schema = mongoose.Schema;
const eventSchema = new Schema(
    {
        type: {
            type: Number,
            required: true,

        },
        desc: {
            type: String,
            required: true,
        },
    },
    { collection: "event", timestamps: true }
);

export default mongoose.model('event', eventSchema)
