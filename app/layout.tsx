import type { Metadata } from "next";
import { Roboto, Archivo } from "next/font/google";
import { organizationSchema, websiteSchema, JsonLd } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${roboto.variable} ${archivo.variable}`}>
      <body className="bg-warm font-sans text-[17px] leading-[1.55] text-charcoal">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <main>{children}</main>
      </body>
    </html>
  );
}
