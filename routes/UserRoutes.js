import express from 'express';
import { getAllUsers } from '../controllers/UserController.js';

const UserRoutes = express.Router();

UserRoutes.route('/').get(getAllUsers);

export default UserRoutes;