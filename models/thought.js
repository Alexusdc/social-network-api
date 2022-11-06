const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const ReactionSchema = require('./reaction');
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true, 
            characters
        },

        createdAt: {
            type: Date, 
            default: Date.now, 
            get: createdAtVal => dateformat(createdAtVal)
        },

        username: {
            type: String, 
            required: true, 
        },

        reactions: [
            ReactionSchema
        ],
    },

    {
        toJSON: {
            getters: true,
        },
        
        id: false, 
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// create the api model using the UserSchema 
const Thought = model('Thoughts', ThoughtSchema);
// export api model 
module.exports = Thought;