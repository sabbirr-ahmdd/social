import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    googleId: {
        type: String,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
    },
    avatarUrl: {
        type: String,
    },
    phone: {
        type: String,
        trim: true,
    },
    username: {
        type: String,
        trim: true,
        lowercase: true,
    },
    bio: {
        type: String,
        trim: true,
        maxlength: 150,
    },
    location: {
        type: String,
        trim: true,
        maxlength: 100,
    },
    dateOfBirth: {
        type: Date,
    },
    payoutMethod: {
        provider: { type: String, enum: ["sslcommerz"] },
        storeId: { type: String },
        storePasswordEncrypted: { type: String },
        label: { type: String },
        addedAt: { type: Date },
    },
}, { timestamps: true });

UserSchema.index({ googleId: 1 }, { sparse: true });
UserSchema.index({ email: 1 }, { sparse: true });
UserSchema.index({ phone: 1 }, { sparse: true });
UserSchema.index({ username: 1 }, { sparse: true });

module.exports = mongoose.model("User", UserSchema);