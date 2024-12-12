import type { Metadata } from "next";
import React from "react";
import { oxygen, oxygenMono } from "./fonts";
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
        className={`${oxygen.variable} ${oxygenMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
