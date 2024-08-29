import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema({
  documentTitle: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Document =
  mongoose.models.Document || mongoose.model("Document", DocumentSchema);
