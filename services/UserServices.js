import { getAllUsers } from "../repository/UserRepository.js";

export const getUserAllData = async () => {

    return getAllUsers();

}

