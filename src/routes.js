import Router from 'express';
import multer from 'multer';

import UploadConfig from './config/upload';
import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';
import DashboardController from './controllers/DashboardController';
import ReservController from './controllers/ReservController';


const routes = new Router();
const upload = multer(UploadConfig);


routes.get('/teste', (req, res) => {
    return res.json({ ok: true });
});

routes.post('/sessions', SessionController.store);

routes.post('/houses', upload.single('thumbnail'), HouseController.store);
routes.get('/houses', HouseController.index);
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update);
routes.delete('/houses', HouseController.destroy);

routes.get('/dashboard', DashboardController.show);

routes.post('/houses/:house_id/reserve', ReservController.store);
routes.get('/reserves', ReservController.index);
routes.delete('/reserves/cancel', ReservController.destroy);

export default routes;