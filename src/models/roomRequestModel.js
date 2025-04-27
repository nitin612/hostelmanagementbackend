import mongoose from "mongoose";

const roomRequestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    faculty: { type: String, required: true },
    batch: { type: String, required: true },
    members: { type: [String] }, // Emails of group members
    reason: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
    furnitureDetails:{},
    adminResponse: { type: {} },
  },
  { timestamps: true }
);

export default mongoose.model("RoomRequest", roomRequestSchema);
