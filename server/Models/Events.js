const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    Event_ID: { type: String, required: true, unique: true },
    Event_Status_Code: { type: String, required: true, unique: true },
    Event_Category: { type: String, required: true, unique: true },
    Organization_ID: { type: String, required: true, unique: true },
    Venue_ID: { type: String, required: true, unique: true },
    Event_Name: { type: String, required: true, unique: true },
    Event_Description: { type: String, required: true, unique: true },
    Event_Poster: { type: String, required: true, unique: true },
    Event_Banner: { type: String, required: true, unique: true },
    Event_Start_Date: { type: String, required: true, unique: true },
    Event_End_Date: { type: String, required: true, unique: true },
    Participants: { type: String, required: true, unique: true },
    Event_Amount: { type: String, required: true, unique: true },
    Comments: { type: String, required: true, unique: true },
});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);