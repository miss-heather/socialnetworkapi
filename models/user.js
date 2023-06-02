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
    freinds: [
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
userSchema.virtual("freindCount").get(function() {
  return this.freinds.length
})
const user = model('user', userSchema);

module.exports = user;