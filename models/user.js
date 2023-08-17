import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        activeMember: {
            type: Boolean,
        },
        startDate: {
            type: Date,
        },
        endDate: {
            type: Date,
        },
    }, 
        {timestamps: true}
);

const User = models.User || mongoose.model("User", userSchema);

export default User;