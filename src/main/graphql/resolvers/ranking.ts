import { adaptGraphql } from '@/main/adapters';
import { makeLoadLastRankingController } from '@/main/factories';

export default {
  Query: {
    lastRanking: async () => adaptGraphql(makeLoadLastRankingController()),
  },
};
