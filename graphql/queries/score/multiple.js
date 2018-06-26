import { GraphQLList } from "graphql";

import { scoreType } from "../../types/score";

import ScoreModel from "../../../models/score";

export default {
    type: new GraphQLList(scoreType),

    resolve(root, params) {
        const events = ScoreModel.find().exec();
        if (!events) {
            throw new Error("Error while fetching score...");
        }
        return events;
    }
};
