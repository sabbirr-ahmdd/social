import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200,
        // e.g. "Car Rent", "Food", "Entry Fee"
    },
    amount: {
        type: Number,
        required: true,
        min: 0.01,
    },
    currency: {
        type: String,
        required: true,
        uppercase: true,
        default: "BDT",
        // e.g. "BDT", "USD", "INR"
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        // the organizer who logged this expense
    },
    splitAmong: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // userIds who share this cost equally
    }, ],
    receiptImageUrl: {
        type: String, // optional S3 URL of a receipt photo
    },
}, { timestamps: true });

// Indexes
ExpenseSchema.index({ eventId: 1 }); // all expenses for an event
ExpenseSchema.index({ addedBy: 1 }); // expenses added by a user
ExpenseSchema.index({ eventId: 1, addedBy: 1 }); // combined filter

module.exports = mongoose.model("Expense", ExpenseSchema);