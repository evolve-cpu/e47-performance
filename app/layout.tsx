import type { Metadata } from "next";
import { Roboto, Archivo } from "next/font/google";
import Script from "next/script";
import { organizationSchema, websiteSchema, localBusinessSchema, JsonLd } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";
import { getCmsNavigation } from "@/lib/cms";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
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

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const navigation = await getCmsNavigation();

  return (
    <html lang="en" className={`${roboto.variable} ${archivo.variable}`}>
      <body className="bg-warm font-sans text-[17px] leading-[1.55] text-charcoal">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T5XQ6M2M1Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T5XQ6M2M1Z');
          `}
        </Script>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <SiteHeader navigation={navigation} />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
