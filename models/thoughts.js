const { Schema, model } = require('mongoose');
const reactionSchema = require("./reactionSchema")
// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,

    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    userName: {
      type: String,
      required: true,
    },
reaction: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
thoughtSchema.virtual("reactionCount").get(function() {
  return this.reaction.length
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;