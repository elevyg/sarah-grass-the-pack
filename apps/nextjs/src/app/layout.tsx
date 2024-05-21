import "~/styles/globals.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "~/app/_components/navbar";

const arizona = localFont({
  src: "../../public/fonts/EduArizonaFlare-Light.otf",
  variable: "--arizona",
});
const foundersGrotesk = localFont({
  src: "../../public/fonts/FoundersGrotesk-Regular.otf",
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
      <body
        className={`font-sans ${inter.variable} ${arizona.variable} ${foundersGrotesk.variable}`}
      >
        <TRPCReactProvider>
          {/* <Navbar /> */}
          <div
          // className="pt-[111px]"
          >
            {children}
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
