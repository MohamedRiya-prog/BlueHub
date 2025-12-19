import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar";
import {SessionProvider, useSession} from "next-auth/react";
import React, {ReactNode} from "react";
import {auth} from "@/auth";

const inter = localFont({
  src: "./fonts/InterFont.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 600 700",
});

export const metadata: Metadata = {
  title: "BlueHub",
  description: "A collaborative HVAC Q&A and knowledge-sharing platform where technical coordinators, engineers, and site teams discuss grilles, diffusers, louvers, volume control dampers, fire and smoke dampers, acoustic louvers, sound attenuators, airflow calculations, standards, and practical field solutions.",
  icons : {
    icon: "/images/site-logo.svg",
  },
};

const RootLayout = async ({
  children,
}: {children: ReactNode}) => {
    const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
    <SessionProvider session={session}>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </SessionProvider>
    </html>
  );
}

export default RootLayout;