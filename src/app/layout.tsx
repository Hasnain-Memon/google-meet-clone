import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import { SocketProvider } from "@/context/SocketContext";
import Header from "@/components/Header";
import { Providers } from "./Provider";
import PeerProvider from "@/components/PeerProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Link Up Live",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
          <SocketProvider>
            <Providers>
              <PeerProvider>
                <Header />
                {children}
              </PeerProvider>
            </Providers>
          </SocketProvider>
      </body>
    </html>
  );
}
