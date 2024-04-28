import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const contactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
    message: { type: String, required: true },
});
export default model('Contact', contactSchema);