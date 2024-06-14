import "~/styles/globals.css";

import localFont from "next/font/local";

import { TRPCReactProvider } from "~/trpc/react";
import Script from "next/script";

const arizona = localFont({
  src: "../../public/fonts/EduArizonaFlare-Light.woff",
  variable: "--arizona",
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
      <body className={`${arizona.variable}`}>
        <TRPCReactProvider>
          <div>{children}</div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
