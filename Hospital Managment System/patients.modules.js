import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
},
diagonsedWith: {
    type: String,
    required: true,
},
gender: {
    type: String,
    required: true,
}

}, {timestamps: true,} );

export const patient = mongoose.model('patient', patientSchema);