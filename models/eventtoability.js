import mongoose from "mongoose";
const Schema = mongoose.Schema;
const eventtoabilitySchema = new Schema(
    {
        eid: {
            type: String,
            required: true,
        },
        ability: {
            type: Array,
            required: true
        }
    },
    { collection: "eventtoability", timestamps: true }
);

export default mongoose.model('eventtoability', eventtoabilitySchema)
