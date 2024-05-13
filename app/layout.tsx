import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import Nav from "@/components/Nav";
import Feed from "@/components/Feed";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KataKita",
  icons: "/favicon.ico",
  description: "A Powerful Message App",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient "></div>
          </div>
          <main className="app">
            <Nav />
            {props.children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
