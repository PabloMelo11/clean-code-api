import { RankingScore } from '@/domain/entities';

interface LastRakingLoader {
  load: () => Promise<RankingScore[]>;
}

export { LastRakingLoader };
