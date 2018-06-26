import  {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLInputObjectType,
    GraphQLList
} from 'graphql';

const abilityArrType = new GraphQLObjectType({
    name: 'AbilityArr',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        aid: {
            type: GraphQLString

        },
        name: {
            type: GraphQLString
        },
        value: {
            type: GraphQLString
        }
    })
})
const abilityArrInputType = new GraphQLInputObjectType({
    name: 'AbilityArrInput',
    fields: () => ({
        aid: {
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: GraphQLString
        },
        value: {
            type: GraphQLString
        }
    })
})

export const eventtoabilityType = new GraphQLObjectType({
    name: 'Eventtoability',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        eid: {
            type: GraphQLString
        },
        ability: {
            type: new GraphQLList(abilityArrType)
        }
    })
})

export const eventtoabilityInputType = new GraphQLInputObjectType({
    name: 'EventtoabilityInput',
    description: 'Insert Eventtoability',
    fields: () => ({
        eid: {
            type: GraphQLString
        },
        ability: {
            type: new GraphQLList(abilityArrInputType)
        }

    })
})