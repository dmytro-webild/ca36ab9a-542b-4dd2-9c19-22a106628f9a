import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";
import { Poppins } from "next/font/google";



export const metadata: Metadata = {
  title: 'WhitePop Pro - Teeth Whitening Strips with Nano Hydroxyapatite',
  description: 'Get professional teeth whitening in 30 minutes with WhitePop Pro strips. Peroxide-free, enamel-safe formula. See results in 7 days. 30-day money-back guarantee.',
};


const poppins = Poppins({
  variable: "--font-poppins",  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const inter = Inter({
  variable: "--font-inter",  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${poppins.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}
