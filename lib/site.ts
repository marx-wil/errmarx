export const siteUrl = "https://wilmarx.stapplinc.com";

export const siteName = "Wilmarx";

export const siteTitle = "Wilmarx — Systems Engineer";

export const siteDescription =
  "Systems architect and Chief Information Officer at Stappl Inc. Backend platforms engineered for stability, scalability, and fault tolerance.";

export const siteLocale = "en_US";

export const personName = "Wilmarx Cayabyab";

export const jobTitle = "Chief Information Officer";

export const organization = "Stappl Inc.";

export const email = "wilmarx@stapplinc.com";

export const sameAs = [
  "https://www.linkedin.com/in/wilmarx-cayabyab/",
  "https://github.com/marx-wil",
] as const;

export const keywords = [
  "Wilmarx",
  "Wilmarx Cayabyab",
  "systems engineer",
  "systems architect",
  "Chief Information Officer",
  "Stappl Inc.",
  "backend platforms",
  "reliability engineering",
  "distributed systems",
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
