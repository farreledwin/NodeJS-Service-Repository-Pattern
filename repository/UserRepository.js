import userModel from '../models/UserModel.js';

export const getAllUsers = () => {
    return userModel.find({});
}