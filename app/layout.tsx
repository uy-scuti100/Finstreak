import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Finstreak",
   description: "Experience Financial Freedom On-The-Go",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   );
}
