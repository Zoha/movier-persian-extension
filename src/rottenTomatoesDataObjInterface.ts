export interface RottenTomatoesDataObjInterface {
  scoreboard: Scoreboard;
  modal: Modal;
}

export interface Modal {
  audienceScoreAll: AudienceScoreAll;
  audienceScoreVerified: AudienceScoreAll;
  hasTomatometerScoreAll: boolean;
  hasTomatometerScoreTop: boolean;
  hasAudienceScoreAll: boolean;
  hasAudienceScoreVerified: boolean;
  scoreDetailDescription: ScoreDetailDescription;
  tomatometerScoreAll: AudienceScoreAll;
  tomatometerScoreTop: AudienceScoreAll;
}

export interface AudienceScoreAll {
  averageRating: null | string;
  bandedRatingCount: string;
  likedCount: number;
  notLikedCount: number;
  ratingCount: number;
  reviewCount: number;
  scoreType: string;
  audienceClass?: null | string;
  score: number | null;
  tomatometerState?: string;
}

export interface ScoreDetailDescription {
  verifiedAudienceScoreMsg: string;
  allAudienceScoreMsg: string;
  nonVerifiableAudienceScoreMsg: string;
  tomatometerMsg: string;
}

export interface Scoreboard {
  audienceBandedRatingCount: string;
  audienceCount: number;
  audienceCountHref: string;
  audienceRatingCopy: string;
  audienceScore: number;
  audienceState: string;
  hasVerifiedAudienceScore: boolean;
  info: string;
  rating: string;
  title: string;
  tomatometerCount: number;
  tomatometerCountHref: string;
  tomatometerScore: number;
  tomatometerState: string;
}
