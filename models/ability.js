import mongoose from "mongoose";
const Schema = mongoose.Schema;
const abilitySchema = new Schema(
    {
        type: {
            type: String
        },

    },
    { collection: "ability", timestamps: true }
);

export default mongoose.model('ability', abilitySchema)
