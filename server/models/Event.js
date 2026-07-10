import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 120,
    },
    description: {
        type: String,
        trim: true,
        maxlength: 2000,
    },
    date: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
    },
    location: {
        type: String,
        required: true,
        trim: true,
        maxlength: 300,
    },
    coordinates: {
        lat: { type: Number },
        lng: { type: Number },
    },

    coverImageUrl: { type: String },
    coverImageKey: { type: String },

    visibility: {
        type: String,
        enum: ["public", "private"],
        default: "private",
        required: true,
    },
    status: {
        type: String,
        enum: ["upcoming", "ongoing", "completed", "cancelled"],
        default: "upcoming",
    },

    // Who created this event
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        // points to either User._id or Organization._id
        // depending on creatorType below
    },
    creatorType: {
        type: String,
        enum: ["user", "organization"],
        required: true,
        default: "user",
    },

    maxAttendees: {
        type: Number,
        min: 1,
    },
    tags: [{ type: String, trim: true, lowercase: true }],
}, { timestamps: true });

// Indexes
EventSchema.index({ creatorId: 1, creatorType: 1, date: -1 }); // my events
EventSchema.index({ visibility: 1, status: 1, date: 1 }); // public feed
EventSchema.index({ tags: 1 });
EventSchema.index({ date: 1 });

module.exports = mongoose.model("Event", EventSchema);