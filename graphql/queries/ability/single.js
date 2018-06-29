import { GraphQLID, GraphQLString, GraphQLNonNull } from "graphql";

import { abilityType } from "../../types/ability";

import AbilityModel from "../../../models/ability";

export default {
  type: abilityType,
  args: {
      id: {
      name: "ID",
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
      return AbilityModel.findById(params.id).exec();
      // return UserModel.findById(params.name).exec();
  }
};
