import {
    GraphQLNonNull
} from 'graphql';

import { abilityType, abilityInputType } from "../../types/ability";
import AbilityModel from '../../../models/ability'

export default {
    type: abilityType,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(abilityInputType)
        }
    },
    resolve(root, params) {
        const pModel = new AbilityModel(params.data);
        const newPost = pModel.save();
        if (!newPost) {
            throw new Error('Error adding event');
        }
        return newPost
    }
}