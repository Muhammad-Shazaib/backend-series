import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import User from "../models/user.module.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"

// get user details from frontend
// validate - not empty
// check if user already exists: username, email
// check for image, check for avatar
// upload them to cloudinary, avatar
// create user object - create entry in db
// remove password and refresh token field from response
// check for user creation 
// return response

const registerUser = asyncHandler(async (req, res) => {


    const { fullname, username, email, password } = req.body
    // console.log("email", email, "password", password, "fullname", fullname, "username", username);

    if ([fullname, username, email, password].some((field) => field?.trim() === ""))
        throw new ApiError(400, "All fields are required"); {

    }

    const existedUser = await User.findOne({ $or: [{ username }, { email }] })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }
    //console.log(req.files);

    const avatarLocalPath = req.files?.avatar?.[0]?.path;
    //   const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path;
    }



    // if (!avatarLocalPath) {
    //     throw new ApiError(400, "Avatar file is required");
    // }
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    // if (!avatar) {
    //     throw new ApiError(400, "Avatar file upload failed");
    // }
    const user = await User.create({
        username: username.toLowerCase(),
        fullname,
        email,
        password,
        //  avatar: avatar.url,
        // coverImage: coverImage?.url || "",
    })
    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering user");

    }
    return res.status(201).json(new ApiResponse(201, "User registered successfully", createdUser));

});

export { registerUser };
