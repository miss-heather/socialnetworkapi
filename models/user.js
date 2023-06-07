const { Schema, model } = require('mongoose');
const assignmentSchema = require('./reactionSchema');

// Schema to create Student model
const userSchema = new Schema(
  {
   userName: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
    },
   
    thoughts: [
      {
        type:Schema.Types.ObjectId,
        ref:"Thought",
      }
    ],
    friends: [
      {
        type:Schema.Types.ObjectId,
        ref:"User",
      }
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
userSchema.virtual("friendCount").get(function() {
  return this.friends.length
})
const user = model('user', userSchema);

module.exports = user;