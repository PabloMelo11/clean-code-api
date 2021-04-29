import { Controller } from '@/presentation/contracts';

import { LoadLastRankingController } from '@/presentation/controllers';
import { LastRankingLoader } from '@/data/services';
import { FakeRankingRepository } from '@/infra/repositories';

const makeLoadLastRankingController = (): Controller => {
  const repository = new FakeRankingRepository();
  const loader = new LastRankingLoader(repository);
  const controller = new LoadLastRankingController(loader);

  return controller;
};

export { makeLoadLastRankingController };
