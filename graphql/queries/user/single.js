import { GraphQLID, GraphQLString, GraphQLNonNull } from "graphql";

import { userType } from "../../types/user";

import UserModel from "../../../models/user";

export default {
  type: userType,
  args: {
    name: {
      name: "Name",
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
      return UserModel.findOne({name: params.name}).exec();
      // return UserModel.findById(params.name).exec();
  }
};
