import { GraphQLID, GraphQLString, GraphQLNonNull } from "graphql";

import { eventtoabilityType } from "../../types/eventtoability";

import EvemttoabilityModel from "../../../models/eventtoability";

export default {
  type: eventtoabilityType,
  args: {
    eid: {
      name: "ID",
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
      return EvemttoabilityModel.findOne({eid: params.eid}).exec();
      // return UserModel.findById(params.name).exec();
  }
};
