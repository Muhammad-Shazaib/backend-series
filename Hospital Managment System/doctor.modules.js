import mongoose from "mongoose";



const doctorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    salary: {
        type: Number,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    experienceInYears: {
        type: String,
        default: 0,

    },
    worksInHospitals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hospital',
        required: true,
    }]

}, { timestamps: true,});

export const doctor = mongoose.model('doctor', doctorSchema);