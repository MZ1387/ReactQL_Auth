const graphql = require('graphql');
const { 
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        id: { type: GraphQLID },
        email: { type: GraphQLString }
    }
});

module.exports = UserType;