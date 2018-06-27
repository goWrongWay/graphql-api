import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLList
} from "graphql";
import PostModel from "../../models/post";
import EventModel from "../../models/event";
import { postType } from "./post";
import { eventType } from "./event";


export const userType = new GraphQLObjectType({
  name: "User",
  description: "User api",
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    email: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
  })
});

export const userInputType = new GraphQLInputObjectType({
  name: "UserInput",
  description: "Insert User",
  fields: () => ({
    email: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
  })
});
