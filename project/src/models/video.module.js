import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema = new Schema(
    {
        videoFile: {
            type: String,  // cloudinary url
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        videoTitle: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: 0
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

    },
    {
        timestamps: true

    }
)
videoSchema.plugin(mongooseAggregatePaginate)

export default mongoose.model("Video", videoSchema)