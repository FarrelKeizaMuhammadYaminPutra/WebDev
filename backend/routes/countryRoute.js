import express from 'express';
import { getCountry } from '../controllers/countriesController.js'; // Import controller dengan ESM

const router = express.Router();

router.get('/', getCountry);

export default router; // Ekspor default menggunakan ESM

