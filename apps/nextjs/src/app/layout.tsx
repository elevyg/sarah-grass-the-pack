import "~/styles/globals.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { TRPCReactProvider } from "~/trpc/react";
import Script from "next/script";

const arizona = localFont({
  src: "../../public/fonts/EduArizonaFlare-Light.woff",
  variable: "--arizona",
});
const foundersGrotesk = localFont({
  src: "../../public/fonts/test-founders-grotesk-light.woff2",
  // src: "../../public/fonts/founders-grotesk-regular.woff2",
  variable: "--founders-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "The Pack",
  description: "An Art School for the Wild",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-eggWhite">
      <head>
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></Script>
        <Script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>
      </head>
      <body
        className={`font-sans ${inter.variable} ${arizona.variable} ${foundersGrotesk.variable}`}
      >
        <TRPCReactProvider>
          <div>{children}</div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
