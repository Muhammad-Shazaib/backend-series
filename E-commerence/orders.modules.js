import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true,
    },
});

const ordersSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
    },

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
orderItems: {
    type: [orderItemsSchema],
    //required: true,
},

address:{
    type: String,
    required: true,
}, 
status:{
    type: String,
    enum: ['pending', 'Cancelled', 'delivered'],
    default: 'pending',
}

}, {
    timestamps: true,
});

export const orders = mongoose.model('orders', ordersSchema);