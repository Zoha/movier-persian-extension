import { getTitleDetailsByCinemaId } from "./mainResolver";

const testCases = [
  {
    cinemaID: 7583,
    englishNameAndYear: "Interstellar 2014",
    persianName: "میان‌ستاره‌ای",
    englishPlot:
      "As famine and famine overwhelm the planet, a team of astronomers decides to use a newly discovered space wormhole to remove the limitations of human travel to the farthest reaches of space.",
    persianPlot:
      "در حالی که قحطی و گرسنگی به کره ی زمین چیره شده، گروهی از ستاره شناسان تصمیم میگیرند تا با استفاده از  یک کرم‌چاله‌ ی فضایی که به تازگی کشف شده، محدودیت های سفر انسان به دور ترین نقاط فضا را از بین ببرند.",
    persianQuotes: 3,
    imdbUrl: "https://www.imdb.com/title/tt0816692",
    rottenTomatoes: {
      tomatometers: {
        votesCount: 73,
        rate: 372,
      },
      audience: {
        votesCount: 178124,
        rate: 86,
      },
    },
  },
];
describe("check resolver main data", () => {
  testCases.forEach((td) => {
    it(`${td.englishNameAndYear} details`, async () => {
      const result = await getTitleDetailsByCinemaId(td.cinemaID);
      expect(result.cinemaID).toBe(td.cinemaID);
      expect(result.englishNameAndYear).toBe(td.englishNameAndYear);
      expect(result.englishPlot).toBe(td.englishPlot);
      expect(result.persianName).toBe(td.persianName);
      expect(result.persianPlot).toBe(td.persianPlot);
      expect(result.persianQuotes.length).toBeGreaterThanOrEqual(
        td.persianQuotes
      );
      expect(result.imdbUrl).toBe(td.imdbUrl);
      if (td.rottenTomatoes) {
        expect(result.rottenTomatoes?.audience.rate).toBe(
          td.rottenTomatoes.audience.rate
        );
        expect(result.rottenTomatoes?.audience.votesCount).toBe(
          td.rottenTomatoes.audience.votesCount
        );
        expect(result.rottenTomatoes?.tomatometers.rate).toBe(
          td.rottenTomatoes.tomatometers.rate
        );
        expect(result.rottenTomatoes?.tomatometers.votesCount).toBe(
          td.rottenTomatoes.tomatometers.votesCount
        );
      }
    }, 200000);
  });
});
