import type { Metadata } from "next";
import React from "react";
import { geistMono, geistSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
