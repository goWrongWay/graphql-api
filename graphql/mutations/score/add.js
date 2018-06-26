import {
    GraphQLNonNull
} from 'graphql';

import { scoreType, scoreInputType } from "../../types/score";
import ScoreModel from '../../../models/score'

export default {
    type: scoreType,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(scoreInputType)
        }
    },
    resolve(root, params) {
        const pModel = new ScoreModel(params.data);
        const newPost = pModel.save();
        if (!newPost) {
            throw new Error('Error adding score');
        }
        return newPost
    }
}