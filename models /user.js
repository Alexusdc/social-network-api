const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true, 
            unique: true, 
            trim: true,
        },

        email: {
            type: String, 
            required: true, 
            unique: true, 
            // must match a valid email address
        },

        thoughts: [
            {type: Schema.Types.ObjectId, ref: 'Thoughts'}
        ],

        friends: [
            {type: Schema.Types.ObjectId, ref: 'User'}
        ],
    },

    {
        toJSON: {
            virtuals: true,
        },
        
        id: false, 
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});


// create the api model using the UserSchema 
const User = model('User', UserSchema);
// export api model 
module.exports = User;