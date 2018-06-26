import {
    GraphQLNonNull
} from 'graphql';

import { eventType, eventInputType } from "../../types/event";
import EventModel from '../../../models/event'

export default {
    type: eventType,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(eventInputType)
        }
    },
    resolve(root, params) {
        const pModel = new EventModel(params.data);
        const newPost = pModel.save();
        if (!newPost) {
            throw new Error('Error adding event');
        }
        return newPost
    }
}