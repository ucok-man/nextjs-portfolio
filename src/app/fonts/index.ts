import { Oxygen, Oxygen_Mono } from "next/font/google";

export const oxygen = Oxygen({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oxygen",
});

export const oxygenMono = Oxygen_Mono({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oxygen-mono",
});
