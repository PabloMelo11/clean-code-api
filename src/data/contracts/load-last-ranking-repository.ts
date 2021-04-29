import { RankingScoreModel } from '@/data/models/ranking-score';

interface LoadLastRankingRepository {
  loadLastRanking: () => Promise<RankingScoreModel[]>;
}

export { LoadLastRankingRepository };
