import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    name: {
        type: Number,
        required: true,
    },
    productsImage: {
        type: String,
    },
    price: {
        type: Number,
        default: 0,
    },
    stock: {
       type: Number,
        default: 0,
    },
category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
    required: true,
},
owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
},

}, {
    timestamps: true,
});

export const products = mongoose.model('products', productsSchema);