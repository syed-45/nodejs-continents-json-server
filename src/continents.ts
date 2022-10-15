interface Continent {
  name: string;
  area: {
    /** Number between 0-100 */
    pctOfTotal: number;
    sqKm: number;
    sqMiles: number;
  };
  highestPoint: string;
  population: {
    people: {
      count: number;
      unit?: "million" | "billion";
    };
    /** Number between 0-100 */
    pctOfTotal: number;
  };
}

export const AFRICA: Continent = {
  name: "Africa",
  area: {
    sqKm: 30_365_000,
    sqMiles: 11_724_000,
    pctOfTotal: 20.3,
  },
  highestPoint: "Mount Kilimanjaro",
  population: {
    people: { count: 1.3, unit: "billion" },
    pctOfTotal: 17,
  },
};

export const ASIA: Continent = {
  name: "Asia",
  area: {
    sqKm: 44_614_000,
    sqMiles: 17_226_000,
    pctOfTotal: 29.8,
  },
  highestPoint: "Mount Everest",
  population: {
    people: { count: 4.6, unit: "billion" },
    pctOfTotal: 60,
  },
};

export const OCEANIA: Continent = {
  name: "Oceania",
  area: {
    sqKm: 8_510_900,
    sqMiles: 3_286_100,
    pctOfTotal: 5.7,
  },
  highestPoint: "Puncak Jaya",
  population: {
    people: { count: 42, unit: "million" },
    pctOfTotal: 0.54,
  },
};

export const SOUTH_AMERICA: Continent = {
  name: "South America",
  area: {
    sqKm: 17_814_000,
    sqMiles: 6_878_000,
    pctOfTotal: 11.9,
  },
  highestPoint: "Aconcagua",
  population: {
    people: { count: 420, unit: "million" },
    pctOfTotal: 5.6,
  },
};
