import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const volunteerSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
    team: { type: String, enum: ['Learning Experience', 'Operations and Events', 'Software Development', 'Web Development'], required: true},
    resume: { type: String,  required: true },
});
export default model('Volunteer', volunteerSchema);