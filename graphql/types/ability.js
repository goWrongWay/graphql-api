import  {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLInputObjectType,
    GraphQLList
} from 'graphql';

export const abilityType = new GraphQLObjectType({
    name: 'Ability',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        type: {
            type: GraphQLString
        },

    })
})

export const abilityInputType = new GraphQLInputObjectType({
    name: 'AbilityInput',
    description: 'Insert Ability',
    fields: () => ({
        type: {
            type: GraphQLString
        },

    })
})