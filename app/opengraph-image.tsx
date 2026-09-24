import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt =
  "Wilmarx, systems engineer and Chief Information Officer at Stappl Inc.";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage() {
  return createOgImage({
    eyebrow: "Chief Information Officer · Stappl Inc.",
    title: "Wilmarx",
    description:
      "Backend platforms engineered for stability, scalability, and fault tolerance.",
  });
}
