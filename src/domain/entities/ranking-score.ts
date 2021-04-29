type Player = {
  name: string;
  country: string;
};

type Hero = {
  name: string;
  level: number;
};

type RankingScore = {
  player: Player;
  score: number;
  matchDate: Date;
  heroes: Hero[];
};

export { RankingScore };
