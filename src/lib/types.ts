
export type Player = {
  id: number;
  name: string;
  number: number;
  role: string;
  placeOfBirth: string;
};

export type Team = {
  id: number;
  name: string;
  players: Player[];
};

export type Game = {
  id: number;
  team1Id: string;
  score1: string;
  hits1: string;
  errors1: string;
  team2Id: string;
  score2: string;
  hits2: string;
  errors2: string;
  day?: string;
  time?: string;
  innings: (string | number)[][]; // 7 innings, 2 teams
};

export type Standing = {
  teamId: number;
  pos: number;
  w: number;
  l: number;
  rs: number;
  ra: number;
  pct: number;
  gb: number;
};
    
    