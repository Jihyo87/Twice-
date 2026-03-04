const twiceDiscography = [
  // — GROUP (Korean Major)
  { id: 1, title: "The Story Begins", releaseDate: "2015-10-20", type: "EP", category: "Korean", cover: "", slug: "the-story-begins" },
  { id: 2, title: "Page Two", releaseDate: "2016-04-25", type: "EP", category: "Korean", cover: "", slug: "page-two" },
  { id: 3, title: "TWICEcoaster: LANE 1", releaseDate: "2016-10-24", type: "EP", category: "Korean", cover: "", slug: "twicecoaster-lane-1" },
  { id: 4, title: "TWICEcoaster: LANE 2", releaseDate: "2017-02-20", type: "Repackage EP", category: "Korean", cover: "", slug: "twicecoaster-lane-2" },
  { id: 5, title: "Signal", releaseDate: "2017-05-15", type: "EP", category: "Korean", cover: "", slug: "signal" },
  { id: 6, title: "Twicetagram", releaseDate: "2017-10-30", type: "Album", category: "Korean", cover: "", slug: "twicetagram" },
  { id: 7, title: "Merry & Happy", releaseDate: "2017-12-11", type: "Repackage Album", category: "Korean", cover: "", slug: "merry-and-happy" },
  { id: 8, title: "What Is Love?", releaseDate: "2018-04-09", type: "EP", category: "Korean", cover: "", slug: "what-is-love" },
  { id: 9, title: "Summer Nights", releaseDate: "2018-07-09", type: "Repackage EP", category: "Korean", cover: "", slug: "summer-nights" },
  { id: 10, title: "YES or YES", releaseDate: "2019-11-05", type: "EP", category: "Korean", cover: "", slug: "yes-or-yes" },
  { id: 11, title: "The Year of Yes", releaseDate: "2018-12-12", type: "Repackage EP", category: "Korean", cover: "", slug: "the-year-of-yes" },
  { id: 12, title: "Fancy You", releaseDate: "2019-04-22", type: "EP", category: "Korean", cover: "", slug: "fancy-you" },
  { id: 13, title: "Feel Special", releaseDate: "2019-09-23", type: "EP", category: "Korean", cover: "", slug: "feel-special" },
  { id: 14, title: "MORE & MORE", releaseDate: "2020-06-01", type: "EP", category: "Korean", cover: "", slug: "more-and-more" },
  { id: 15, title: "Eyes Wide Open", releaseDate: "2020-10-26", type: "Album", category: "Korean", cover: "", slug: "eyes-wide-open" },
  { id: 16, title: "Taste of Love", releaseDate: "2021-06-11", type: "EP", category: "Korean", cover: "", slug: "taste-of-love" },
  { id: 17, title: "Formula of Love: O+T=<3", releaseDate: "2021-11-12", type: "Album", category: "Korean", cover: "", slug: "formula-of-love" },
  { id: 18, title: "BETWEEN 1&2", releaseDate: "2022-08-26", type: "EP", category: "Korean", cover: "", slug: "between-1-and-2" },
  { id: 19, title: "READY TO BE", releaseDate: "2023-03-10", type: "EP", category: "Korean", cover: "", slug: "ready-to-be" },
  { id: 20, title: "With YOU-th", releaseDate: "2024-05-17", type: "EP", category: "Korean", cover: "", slug: "with-you-th" },
  { id: 21, title: "STRATEGY", releaseDate: "2024-12-06", type: "EP", category: "Korean", cover: "", slug: "strategy" }, // added
  { id: 22, title: "This Is For", releaseDate: "2025-06-20", type: "Album", category: "Korean", cover: "", slug: "this-is-for" }, // existing future
  { id: 23, title: "TEN: The Story Goes On", releaseDate: "2025-10-10", type: "Album", category: "Korean", cover: "", slug: "ten-the-story-goes-on" },

  // — GROUP (Japanese Major)
  { id: 24, title: "#TWICE", releaseDate: "2017-06-28", type: "Compilation", category: "Japanese", cover: "", slug: "hashtag-twice" },
  { id: 25, title: "#TWICE2", releaseDate: "2019-03-06", type: "Compilation", category: "Japanese", cover: "", slug: "twice2" }, // added
  { id: 26, title: "#TWICE3", releaseDate: "2020-09-16", type: "Compilation", category: "Japanese", cover: "", slug: "twice3" }, // added
  { id: 27, title: "#TWICE4", releaseDate: "2022-03-16", type: "Compilation", category: "Japanese", cover: "", slug: "twice4" }, // added
  { id: 28, title: "BDZ", releaseDate: "2018-09-12", type: "Album", category: "Japanese", cover: "", slug: "bdz" },
  { id: 29, title: "&TWICE", releaseDate: "2019-11-20", type: "Album", category: "Japanese", cover: "", slug: "and-twice" },
  { id: 30, title: "Perfect World", releaseDate: "2021-07-28", type: "Album", category: "Japanese", cover: "", slug: "perfect-world" },
  { id: 31, title: "Celebrate", releaseDate: "2022-07-27", type: "Album", category: "Japanese", cover: "", slug: "celebrate" },
  { id: 32, title: "DIVE", releaseDate: "2024-07-17", type: "Album", category: "Japanese", cover: "", slug: "dive" },
  { id: 33, title: "ENEMY", releaseDate: "2025-08-27", type: "Album", category: "Japanese", cover: "", slug: "enemy" },
  { id: 34, title: "Twice5", releaseDate: "2025-05-14", type: "Compilation", category: "Japanese", cover: "", slug: "twice5" },

  // — JAPANESE SINGLE ALBUMS (added)
  { id: 35, title: "One More Time", releaseDate: "2017-10-18", type: "Single", category: "Japanese", cover: "", slug: "one-more-time" },
  { id: 36, title: "Candy Pop", releaseDate: "2018-02-07", type: "Single", category: "Japanese", cover: "", slug: "candy-pop" },
  { id: 37, title: "Wake Me Up", releaseDate: "2018-05-16", type: "Single", category: "Japanese", cover: "", slug: "wake-me-up" },
  { id: 38, title: "Happy Happy", releaseDate: "2019-07-17", type: "Single", category: "Japanese", cover: "", slug: "happy-happy" },
  { id: 39, title: "Breakthrough", releaseDate: "2019-07-24", type: "Single", category: "Japanese", cover: "", slug: "breakthrough" },
  { id: 40, title: "Fanfare", releaseDate: "2020-07-08", type: "Single", category: "Japanese", cover: "", slug: "fanfare" },
  { id: 41, title: "BETTER", releaseDate: "2020-11-18", type: "Single", category: "Japanese", cover: "", slug: "better" },
  { id: 42, title: "Kura Kura", releaseDate: "2021-05-12", type: "Single", category: "Japanese", cover: "", slug: "kura-kura" },
  { id: 43, title: "Doughnut", releaseDate: "2021-12-15", type: "Single", category: "Japanese", cover: "", slug: "doughnut" },

  // — SUBUNIT (MiSaMo)
  { id: 44, title: "Masterpiece", releaseDate: "2023-07-26", type: "Album", category: "Subunit", cover: "", slug: "masterpiece" },
  { id: 45, title: "HAUTE COUTURE", releaseDate: "2024-11-06", type: "EP", category: "Subunit", cover: "", slug: "haute-couture" },
  { id: 46, title: "PLAY", releaseDate: "2026-02-04", type: "Album", category: "Subunit", cover: "", slug: "play" },

  // — SOLO MAJOR
  { id: 47, title: "ZONE", releaseDate: "2023-08-18", type: "Mini Album", category: "Solo", cover: "", slug: "zone-jihyo" },
  { id: 48, title: "Na", releaseDate: "2024-06-06", type: "Mini Album", category: "Solo", cover: "", slug: "na-nayeon" },
  { id: 49, title: "Aboutzu", releaseDate: "2024-10-01", type: "Mini Album", category: "Solo", cover: "", slug: "aboutzu-tzuyu" },
  { id: 50, title: "Lil Fantasy Vol. 1", releaseDate: "2025-09-12", type: "Album", category: "Solo", cover: "", slug: "lil-fantasy-vol-1-chaeyoung" },

  // — SOUNDTRACK / DIGITAL SINGLES
  { id: 51, title: "Takedown", releaseDate: "2025-06-20", type: "Soundtrack Single", category: "Group", cover: "", slug: "takedown" } // added
];