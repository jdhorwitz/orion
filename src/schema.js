const { buildSchema } = require('graphql');
let {
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
} = require('graphql');

const Speakers = require('./data/Speakers');

const SpeakerType = new GraphQLObjectType({
  name: "Speaker",
  description: "Each speaker who gave a talk and their recording",
  fields: () => ({
    name: {type: new GraphQLNonNull(GraphQLString)},
    title: {type: new GraphQLNonNull(GraphQLString)}
  })
});

const SpeakerQueryRootType = new GraphQLObjectType({
  name: 'SpeakerTapeSchema',
  description: 'Speaker Tape Main Query Root',
  fields: () => ({
    speakers: {
      type: new GraphQLList(SpeakerType),
      description: "Get all speakers and talk titles",
      resolve: function() {
        return Speakers
      }
    },
  })
});

const SpeakerSchema = new GraphQLSchema({
  query: SpeakerQueryRootType
});

module.exports = SpeakerSchema;
