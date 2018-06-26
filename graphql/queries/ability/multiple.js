import { GraphQLList } from "graphql";

import { abilityType } from "../../types/ability";

import AbilityModel from "../../../models/ability";

export default {
    type: new GraphQLList(abilityType),

    resolve(root, params) {
        const abilitys = AbilityModel.find().exec();
        if (!abilitys) {
            throw new Error("Error while fetching abilitys...");
        }
        return abilitys;
    }
};
