const mongoose = require("mongoose");


const DeviceSchema = new mongoose.Schema({}, { strict: false });

module.exports.Device = mongoose.model("Device", DeviceSchema, "devices");

module.exports.Status = mongoose.model("Status", DeviceSchema, "status");