import  {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLInputObjectType,
    GraphQLList
} from 'graphql';

export const scoreType = new GraphQLObjectType({
    name: 'Score',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        uid: {
            type: GraphQLString
        },
        eid: {
            type: GraphQLString
        },
        aid: {
            type: GraphQLString
        },
        goal: {
            type: GraphQLString,
        },
        time: {
            type: GraphQLString
        }


    })
})

export const scoreInputType = new GraphQLInputObjectType({
    name: 'ScoreInput',
    description: 'Insert Score',
    fields: () => ({
        uid: {
            type: GraphQLString
        },
        eid: {
            type: GraphQLString
        },
        aid: {
            type: GraphQLString
        },
        goal: {
            type: GraphQLString,
        },
        time: {
            type: GraphQLString
        }

    })
})