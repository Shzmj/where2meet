import mongoose from "mongoose";
const GroupSchema = mongoose.Schema(
    {
        sessionId: {
            type: String,
            required: true
        }, 
        groupAdmin: {
            type: String,
            required: true
        },
        users: [{
            username: {
                type: String
            },
            location: {
                type: String
            }
        }],
        eventTypes: [{
            type: String
        }]
    }
)

const userSchema = mongoose.Schema(
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
