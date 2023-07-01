import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        location: {
            type: String
        }
    }
)
export default mongoose.model('User', UserSchema, 'user');
