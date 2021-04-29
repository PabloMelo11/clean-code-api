import { Request, Response } from 'express';

import { Controller } from '@/presentation/contracts';

const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const { data, statusCode } = await controller.handle();

    response.status(statusCode).json(data);
  };
};

export { adaptRoute };
