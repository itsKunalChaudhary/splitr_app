import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import {ConvexClientProvider} from "@/app/ConvexClientProvider";
import {ClerkProvider} from "@clerk/nextjs";

const inter = Inter({ subsets:["latin"] })

export const metadata = {
  title: "Splitr",
  description: "Smartest way to Split among your friends!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <title>{metadata.title}</title>
        <link rel="icon" href="/logos/logo-s.png" sizes={"any"} />
    </head>
      <body
        className={`${inter.className}`}
      >
      <ClerkProvider>
        <ConvexClientProvider>
          <main className={"min-h-screen"}>
            <Header />
            {children}
          </main>
        </ConvexClientProvider>
      </ClerkProvider>
      </body>
    </html>
  );
}
