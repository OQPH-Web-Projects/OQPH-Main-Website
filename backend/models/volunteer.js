const moongose = require('mongoose');

const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    team: {
        type: String,
        enum: ['Learning Experience', 'Operations and Events', 'Software Development', 'Web Development'],
        required: true,
    },
    resume: {
        type: String, // link to resume
        required: true,
    },
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);
module.exports = Volunteer;
