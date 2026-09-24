import { ImageResponse } from "next/og";
import { stapplLogoSrc } from "@/lib/og-image";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const logo = await stapplLogoSrc();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#17191d",
        }}
      >
        <img src={logo} alt="" width={28} height={8} />
      </div>
    ),
    size,
  );
}
