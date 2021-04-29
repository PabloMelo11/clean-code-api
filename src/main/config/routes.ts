import { Express, Router } from 'express';
import { readdirSync } from 'fs';

const setupRoutes = (app: Express): void => {
  const router = Router();
  app.use('/api', router);
  readdirSync(`${__dirname}/../routes`).map(async (fileName) => {
    (await import(`../routes/${fileName}`)).default(router);
  });
};

export { setupRoutes };
