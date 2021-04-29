import { HttpResponse } from '@/presentation/contracts';

interface Controller {
  handle: () => Promise<HttpResponse>;
}

export { Controller };
