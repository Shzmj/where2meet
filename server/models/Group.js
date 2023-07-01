import mongoose from "mongoose";

const GroupSchema = mongoose.Schema(
    {
        sessionId: {
            type: String,
            required: true
        }, 
        groupName: {
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

export default mongoose.model('Group', GroupSchema, 'group');
