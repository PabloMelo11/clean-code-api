import { LastRakingLoader } from '@/domain/usecases';
import { RankingScore } from '@/domain/entities';

import { LoadLastRankingRepository } from '@/data/contracts';
import { RankingUnavailableError } from '@/domain/errors';

class LastRankingLoader implements LastRakingLoader {
  constructor(
    private readonly loadLastRankingRepository: LoadLastRankingRepository
  ) {}

  async load(): Promise<RankingScore[]> {
    if (new Date().getHours() > 21) {
      throw new RankingUnavailableError();
    }

    return this.loadLastRankingRepository.loadLastRanking();
  }
}

export { LastRankingLoader };
