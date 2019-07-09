const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = Schema({
    eventOrganisation: { type: String, ref: 'Event' },
    events: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
});


module.exports = mongoose.model('Company', CompanySchema)