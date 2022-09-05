import { Express } from 'express';
import accommodationsRoutes from './accommodations.routes';
import userRoutes from './users.routes';

const appRoutes = (app: Express) => {
  app.use('/users', userRoutes());
  app.use('/accommodations', accommodationsRoutes());
};

export default appRoutes;
