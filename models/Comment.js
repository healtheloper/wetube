import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  /*video: {
    type: mongoose.Schema.Types.ObjectId, // video ID 는 1
    ref: "Video", // 좋아요를 저장하거나 유저를 저장하거나 할 땐 다른 ref를 사용, 1, 2, 3
  },*/
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
