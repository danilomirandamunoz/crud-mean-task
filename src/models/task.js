const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let TaskSchema = new Schema({
    titulo: { type: String, unique: true, required: true },
    estado: { type: Boolean, default: false }
});

module.exports = mongoose.model("Task", TaskSchema);