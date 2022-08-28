import { CinemaAPIDataInterface } from "./cinemaResultDataInterface";
import axios from "axios";
import { load as cheerioLoad } from "cheerio";
import { RottenTomatoesDataObjInterface } from "./rottenTomatoesDataObjInterface";

const CINEMA_BASE_URL = "https://30nama.com/";
const CINEMA_API_URL = "https://interface.30nama.com/";
const CINEMA_API_KEY =
  "YygufGCvFgYR3g9sjD92Ct5ZSx7SJs4JXpuCeTS24nWAszaL4u3qCDZRULpejmzF";

export async function searchForTitleInCinemaAndReturnFirstResultUrl(
  query: string
): Promise<string> {
  const searchUrlObj = new URL(CINEMA_BASE_URL);
  searchUrlObj.pathname = "/search";
  const searchUrl = searchUrlObj.href;
  const result = await axios.get(searchUrl, {
    params: {
      q: query,
    },
  });
  const $ = cheerioLoad(result.data);
  const relativeUrl =
    $(".video-title").eq(0).find("a").eq(0).attr("href") || "";
  const absoluteUrlObj = new URL(CINEMA_BASE_URL);
  absoluteUrlObj.pathname = relativeUrl;
  return absoluteUrlObj.href;
}

export function extractIdFromCinemaUrl(url: string): string {
  url = url.replace(CINEMA_BASE_URL, "");
  const [, id] = /^\/?[^/]+\/(\d+)/.exec(url) ?? [];
  return id;
}

export interface TitleDetails {
  englishNameAndYear: string;
  persianName: string;
  englishPlot: string;
  persianPlot: string;
  persianQuotes: string[];
  rottenTomatoes?: RottenTomatoesDetails;
  imdbUrl: string;
  cinemaID: number;
}

export async function getTitleDetailsByCinemaId(
  id: string | number
): Promise<TitleDetails> {
  const apiUrlObj = new URL(CINEMA_API_URL);
  apiUrlObj.pathname = `/api/v1/action/single/id/${id}`;
  const { data } = await axios.post(
    apiUrlObj.href,
    {},
    {
      headers: {
        "c-api-key": CINEMA_API_KEY,
      },
    }
  );
  if (!data.success) {
    throw new Error("could not get data from cinema");
  }
  const result: CinemaAPIDataInterface = data.result;
  let rottenTomatoes = null;
  if (result.rottentomatoes) {
    rottenTomatoes = await getRottenTomatoesDetails(result.rottentomatoes);
  }
  return {
    cinemaID: result.id,
    englishNameAndYear: result.title,
    persianName: result.persian_title,
    englishPlot: result.english_plot,
    persianPlot: result.persian_plot,
    persianQuotes: result.quotes?.map((i) =>
      i.quote?.replace(/<br\s?\/?>/g, "\n").replace(/\r/g, "")
    ),
    imdbUrl: result.imdb,
    ...(rottenTomatoes ? { rottenTomatoes } : {}),
  };
}

export interface RottenTomatoesDetails {
  tomatometers: {
    votesCount: number;
    rate: number;
  };
  audience: {
    votesCount: number;
    rate: number;
  };
}

export async function getRottenTomatoesDetails(
  url: string
): Promise<RottenTomatoesDetails> {
  const { data } = await axios.get(url);
  const $ = cheerioLoad(data);
  const dataObj: RottenTomatoesDataObjInterface = JSON.parse(
    $("#score-details-json").text()
  );

  return {
    tomatometers: {
      votesCount: dataObj.scoreboard.tomatometerScore,
      rate: dataObj.scoreboard.tomatometerCount,
    },
    audience: {
      votesCount: dataObj.scoreboard.audienceCount,
      rate: dataObj.scoreboard.audienceScore,
    },
  };
}

export async function getTitleDetailsByCinemaUrl(
  url: string
): Promise<TitleDetails> {
  const id = extractIdFromCinemaUrl(url);
  return getTitleDetailsByCinemaId(id);
}

export async function getTitleDetailsByIMDBIdOrSearchQuery(
  queryOrIMDBId: string
): Promise<TitleDetails> {
  const url = await searchForTitleInCinemaAndReturnFirstResultUrl(
    queryOrIMDBId
  );
  return getTitleDetailsByCinemaUrl(url);
}
