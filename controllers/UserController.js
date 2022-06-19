import { getUserAllData } from '../services/UserServices.js';

export const getAllUsers = async (req, res) => {
    const data = await getUserAllData();

    res.status(200).json({
        status: true,
        data: data,
        message: 'success'
    })
};