import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    expenseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Expense",
        required: true,
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true,
    },
    fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        // the guest who owes money
    },
    toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        // the organizer who should receive money
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
    },
    method: {
        type: String,
        enum: ["sslcommerz", "manual"],
        required: true,
        // sslcommerz = paid via payment gateway
        // manual = organizer marks "I received cash"
    },
    status: {
        type: String,
        enum: ["pending", "paid", "failed", "cancelled"],
        default: "pending",
    },

    // SSLCommerz specific — only filled when method = "sslcommerz"
    transactionId: { type: String }, // our internal tran_id (uuid) sent to SSLCommerz
    sslSessionKey: { type: String }, // session key returned by SSLCommerz init
    sslValId: { type: String }, // val_id from SSLCommerz callback (used to validate)

    // Manual payment — only filled when method = "manual"
    markedPaidBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // who pressed "I received this payment"
    },
    note: { type: String, maxlength: 300 },
    paidAt: { type: Date },
}, { timestamps: true });

// Indexes
PaymentSchema.index({ eventId: 1 });
PaymentSchema.index({ expenseId: 1 });
PaymentSchema.index({ fromUserId: 1, status: 1 }); // what user X owes
PaymentSchema.index({ toUserId: 1, status: 1 }); // what organizer Y should receive
PaymentSchema.index({ transactionId: 1 }, { sparse: true }); // SSLCommerz callback lookup

module.exports = mongoose.model("Payment", PaymentSchema);