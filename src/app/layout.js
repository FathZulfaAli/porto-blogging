/** @format */

import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./provider";

export const metadata = {
  title: "Blogging Porto",
  description: "Blogging Portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
