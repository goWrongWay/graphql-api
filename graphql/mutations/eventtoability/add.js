import {
    GraphQLNonNull
} from 'graphql';

import { eventtoabilityType, eventtoabilityInputType } from "../../types/eventtoability";
import EventtoabilityModel from '../../../models/eventtoability'

export default {
    type: eventtoabilityType,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(eventtoabilityInputType)
        }
    },
    resolve(root, params) {
        const pModel = new EventtoabilityModel(params.data);
        const newPost = pModel.save();
        if (!newPost) {
            throw new Error('Error adding eventtoability');
        }
        return newPost
    }
}