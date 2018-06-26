import  {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLInputObjectType,
    GraphQLList
} from 'graphql';

export const eventType = new GraphQLObjectType({
    name: 'Event',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        type: {
            type: GraphQLFloat
        },
        desc: {
            type: GraphQLString
        }

    })
})

export const eventInputType = new GraphQLInputObjectType({
    name: 'EventInput',
    description: 'Insert Event',
    fields: () => ({
        type: {
            type: GraphQLFloat
        },
        desc: {
            type: GraphQLString
        }
    })
})