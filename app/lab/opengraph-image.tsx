import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Wilmarx interface lab, the original interactive portfolio.";
export const size = ogSize;
export const contentType = ogContentType;

export default async function LabOpenGraphImage() {
  return createOgImage({
    eyebrow: "Wilmarx",
    title: "Interface Lab",
    description: "The original interactive portfolio experience.",
  });
}
