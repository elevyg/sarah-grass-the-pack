import "~/styles/globals.css";

import localFont from "next/font/local";

import { TRPCReactProvider } from "~/trpc/react";

const arizona = localFont({
  src: "../../public/fonts/EduArizonaFlare-Light.woff",
  variable: "--arizona",
});
const foundersGrotesk = localFont({
  src: "../../public/fonts/founders-grotesk-regular.woff2",
  variable: "--founders-grotesk",
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
      <head></head>
      <body className={`${arizona.variable} ${foundersGrotesk.variable}`}>
        <TRPCReactProvider>
          <div>{children}</div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
