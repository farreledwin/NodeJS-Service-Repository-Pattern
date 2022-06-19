import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String
    }
})

const userModel = mongoose.model('User',userSchema);

export default userModel;