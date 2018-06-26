import { GraphQLList } from "graphql";

import { eventtoabilityType } from "../../types/eventtoability";

import EventtoabilityModel from "../../../models/eventtoability";

export default {
    type: new GraphQLList(eventtoabilityType),

    resolve(root, params) {
        const abilitys = EventtoabilityModel.find().exec();
        if (!abilitys) {
            throw new Error("Error while fetching abilitys...");
        }
        return abilitys;
    }
};
