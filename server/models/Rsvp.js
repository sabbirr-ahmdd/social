import mongoose from "mongoose";

const RsvpSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    status: {
        type: String,
        enum: ["going", "not_going", "maybe", "pending"],
        default: "pending",
    },
    note: {
        type: String,
        maxlength: 300,
        // optional message from guest, e.g. "I'll bring snacks!"
    },
    respondedAt: {
        type: Date,
    },
}, { timestamps: true });

// One RSVP per user per event — enforced by compound unique index
RsvpSchema.index({ eventId: 1, userId: 1 }, { unique: true });
RsvpSchema.index({ eventId: 1, status: 1 }); // "how many going to event X?"
RsvpSchema.index({ userId: 1 }); // "which events has user Y RSVPed to?"

module.exports = mongoose.model("Rsvp", RsvpSchema);