import "./globals.css";
import { exo } from "./styles/fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./utils/providers/Providers";
import PayPalConfig from "./components/PayPal/paypal.config";
import AOS from "./utils/providers/AOS";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Team Oregon | PNW Bike Racing",
  description:
    "Official website for Team Oregon. Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades.",
  keywords:
    "Cycling team, Road cycling, Mountain biking, Bicycle racing, Bike racing, Cycling events, Bike enthusiasts, Team rides, Cycling community, Competitive cycling, Cycling club, Cycling races, Bike events, Team jerseys, Cycling challenges, Bike training, Portland cycling, portland bike racing, portland cycling club, portland bicycle racing",
  openGraph: {
    title: "Team Oregon",
    description:
      "Official website for Team Oregon. Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades.",
    siteName: "Team Oregon",
    type: "website",
    locale: "en_US",
    url: "https://teamoregon.cc",
    images: [
      {
        url: "https://teamoregon.cc/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Team Oregon Cycling",
      },
    ],
  },
  images: [
    {
      url: "https://teamoregon.cc/images/og-image.png",
      width: 1200,
      height: 630,
      alt: "Team Oregon Cycling",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${exo.className}`}>
        <AuthProvider>
          <PayPalConfig>
            <Navbar />
            <div className="pb-[375px] md:pb-[275px] lg:pb-[250px]">
              {children}
              <SpeedInsights />
              <Analytics />
              <GoogleAnalytics gaId="G-FMFV6Z9Y0C" />
            </div>
            <Footer />
            <AOS />
          </PayPalConfig>
        </AuthProvider>
      </body>
    </html>
  );
}
