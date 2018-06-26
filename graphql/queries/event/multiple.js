import { GraphQLList } from "graphql";

import { eventType } from "../../types/event";

import EventModel from "../../../models/event";

export default {
    type: new GraphQLList(eventType),

    resolve(root, params) {
        const events = EventModel.find().exec();
        if (!events) {
            throw new Error("Error while fetching events...");
        }
        return events;
    }
};
