import {Router} from 'express';
import { createOffer, getAllOffers, getFavoriteOffers } from '../controllers/offerController.js';
import upload from '../middleware/upload.js';
import { getFullOffer, toogleFavorite } from '../controllers/offerController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = new Router();

router.get('/offers', getAllOffers);
router.get('/favorite', authenticateToken, getFavoriteOffers);
router.post('/favorite/:offerId/:status',authenticateToken, toogleFavorite);
router.get('/offers/:id', getFullOffer)
router.post('/offers', upload.fields([
    { name: 'previewImage', maxCount: 1},
    { name: 'photos', maxCount: 6}
]), createOffer);




export default router;