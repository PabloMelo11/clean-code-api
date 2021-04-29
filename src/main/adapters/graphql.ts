import { Controller } from '@/presentation/contracts';

const adaptGraphql = async (controller: Controller): Promise<any> => {
  const { data } = await controller.handle();
  return data;
};

export { adaptGraphql };
