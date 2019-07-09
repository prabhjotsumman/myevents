const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = Schema({
    eventID: Schema.Types.ObjectId,
    eventName: { type: String, required: true },
    eventDescription: { type: String, required: true },
    eventCategory: { type: String, required: true },
    eventStartDate: { type: String, required: true },
    eventStartTime: { type: String, required: true },
    eventEndDate: { type: String, required: true },
    eventEndTime: { type: String, required: true },
    eventAmount: { type: String, required: true },
    eventVenue: { type: String, required: true },
    eventStatusCode: { type: String, required: false, default: "Registered" },
    eventOrganisation: { type: String, required: true, lowercase: true },
    // organizationID: { type: String, required: true },
    // eventPoster: { type: String, required: true },
    // eventBanner: { type: String, required: true },
    // participants: { type: String, required: true },
    // comments: { type: String, required: true },
    created: { type: Date, default: () => new Date() }
});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Event", EventSchema);

// eventAmount: "1000"
// eventName: "XT Summit"
// eventDescription: "showcase of new tech models"
// eventCategory: "Summit"
// eventStartDate: "2019-07-10"
// eventStartTime: "10:30"
// eventEndDate: "2019-07-10"
// eventEndTime: "12:30"
// eventVenue: "Den"