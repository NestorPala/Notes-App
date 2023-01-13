const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: false,
    },
    is_archived: {
        type: Boolean,
        required: false,
    },
    createdAt: { 
        type: Date, 
        expires: '3m', 
        default: Date.now 
    }
});

module.exports = mongoose.model("Note", noteSchema);