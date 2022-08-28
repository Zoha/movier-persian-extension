export interface CinemaAPIDataInterface {
  id: number;
  title: string;
  stream: boolean;
  is_series: boolean;
  year: string;
  year_end: string;
  title_type: string;
  persian_subtitle: boolean;
  persian_title: string;
  persian_plot: string;
  english_plot: string;
  director: null;
  creator: Creator[];
  cast: Cast[];
  cast_cache: boolean;
  cast_cache_key: string;
  writer: { [key: string]: Creator };
  genre: string[];
  genre_full: Genre[];
  country: PrimaryLanguage[];
  language: PrimaryLanguage[];
  primary_language: PrimaryLanguage;
  time: string;
  budget: string;
  age: string;
  imdb: string;
  imdb_score: string;
  imdb_votes: string;
  "30nama_score": number;
  "30nama_votes": string;
  "30nama_userrate": null;
  total_watchlist: string;
  total_favorite: string;
  coming_soon: boolean;
  free_stream: boolean;
  imdb_250: string;
  release_date: null;
  web_release_date: null;
  bluray_release_date: null;
  post_note: string;
  updates_note: UpdatesNote[];
  airstatus: Airstatus;
  nextepisode: null;
  networks: string[];
  image: CinemaAPIDataInterfaceImage;
  subtitle: Subtitle[];
  subtitle_cache: boolean;
  subtitle_cache_key: string;
  collections: Collection[];
  collections_cache: boolean;
  collections_cache_key: string;
  trailers: Trailer[];
  trailers_cache: boolean;
  trailers_cache_key: string;
  soundtracks: null;
  reviews: null;
  news: News[];
  news_cache: boolean;
  news_cache_key: string;
  quotes: Quote[];
  quotes_cache: boolean;
  quotes_cache_key: string;
  related_posts: null;
  seo: CinemaAPIDataInterfaceSEO;
  reviews_cache_key: string;
  rottentomatoes?: string;
  rottentomatoes_score?: number;
}

export interface Airstatus {
  status: null | string;
  data: null | string;
}

export interface Cast {
  name: string;
  as: string;
  imdb: string;
  order: number;
  id: string;
  image: CastImage;
}

export interface CastImage {
  cover: boolean;
  poster: ImagePoster;
}

export interface ImagePoster {
  big: string;
  big_webp: string;
  large: string;
  large_webp: string;
  medium: string;
  medium_webp: string;
  small: string;
  small_webp: string;
}

export interface Collection {
  id: number;
  name: string;
  posts: Post[];
}

export interface Post {
  id: number;
  title_type: string;
  stream: boolean;
  is_series: boolean;
  coming_soon: boolean;
  free_stream: boolean;
  persian_subtitle: boolean;
  imdb_250: string;
  title: string;
  persian_title: string;
  persian_plot: string;
  english_plot: string;
  imdb_id: string;
  imdb_score: string;
  imdb_votes: string;
  "30nama_score": number;
  "30nama_votes": string;
  myanimelist: string;
  myanimelist_score: number | null;
  myanimelist_votes: null | string;
  mydramalist: null | string;
  mydramalist_score: null | string;
  mydramalist_votes: null | string;
  seo: PostSEO;
  image: PostImage;
  genre: Genre[];
  airstatus: Airstatus;
  nextepisode: Nextepisode;
}

export interface Genre {
  name: string;
  slug: string;
}

export interface PostImage {
  cover: boolean | string;
  cover_webp: boolean | string;
  poster: ImagePoster;
}

export interface Nextepisode {
  caption: null;
  date: null;
}

export interface PostSEO {
  title: string;
  description: string;
  alt: string;
}

export interface PrimaryLanguage {
  name: string;
  code: string;
  order: string;
}

export interface Creator {
  name: string;
  imdb: string;
  order: number;
}

export interface CinemaAPIDataInterfaceImage {
  cover: string;
  cover_webp: string;
  poster: ImagePoster;
}

export interface News {
  id: number;
  title: string;
  date: string;
  poster: NewsPoster;
  image: NewsImage;
  length: number;
  description: string;
  comments: number;
}

export interface NewsImage {
  full: string;
  full_webp: string;
  thumb: string;
  thumb_webp: string;
}

export interface NewsPoster {
  large: string;
  thumbnail: string;
}

export interface Quote {
  quote: string;
  name: string;
}

export interface CinemaAPIDataInterfaceSEO {
  "og:type": string;
  "video:duration": number;
  "video:writer": string[];
  "video:creator": string[];
  genres: null;
  biographies: null;
  robots: string;
  "google-site-verification": string;
  "og:locale": string;
  "og:site_name": string;
  "twitter:card": string;
  "twitter:creator": string;
  "twitter:site": string;
  "twitter:title": string;
  "og:title": string;
  title: string;
  h1: string;
  "twitter:image:alt": string;
  "twitter:description": string;
  "og:description": string;
  description: string;
  keywords: null;
  canonical: string;
  "og:url": string;
  "twitter:image": string;
  "og:image": string;
  schema: Schema;
}

export interface Schema {
  "@context": string;
  "@type": string;
  url: string;
  name: string;
  image: string;
  description: string;
  aggregateRating: AggregateRating;
  contentRating: string;
  genre: string[];
}

export interface AggregateRating {
  "@type": string;
  ratingCount: number;
  bestRating: number;
  worstRating: number;
  ratingValue: number;
}

export interface Subtitle {
  language: string;
  quality: string;
  link: string;
  single: boolean;
  type: null;
  season: string;
}

export interface Trailer {
  title: string;
  quality: string;
  link: string;
  ip: string;
  cover: string;
}

export interface UpdatesNote {
  title: string;
  content: string;
  date: string;
}
