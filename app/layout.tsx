import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/contexts/language-context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "বগুড়া জালি টুপি - ঐতিহ্যবাহী বাংলাদেশি টুপি",
  description:
    "বাংলাদেশের সেরা মানের জালি টুপি। বগুড়ার ঐতিহ্যবাহী হস্তশিল্প। সারা বাংলাদেশে ফ্রি ডেলিভারি।",
  keywords:
    "জালি টুপি, বগুড়া টুপি, বাংলাদেশি টুপি, ঐতিহ্যবাহী টুপি, হস্তশিল্প",
  authors: [{ name: "বগুড়া জালি টুপি" }],
  creator: "বগুড়া জালি টুপি",
  publisher: "বগুড়া জালি টুপি",
  openGraph: {
    title: "বগুড়া জালি টুপি - ঐতিহ্যবাহী বাংলাদেশি টুপি",
    description:
      "বাংলাদেশের সেরা মানের জালি টুপি। বগুড়ার ঐতিহ্যবাহী হস্তশিল্প।",
    url: "https://bogurajalitupi.com",
    siteName: "বগুড়া জালি টুপি",
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "বগুড়া জালি টুপি - ঐতিহ্যবাহী বাংলাদেশি টুপি",
    description:
      "বাংলাদেশের সেরা মানের জালি টুপি। বগুড়ার ঐতিহ্যবাহী হস্তশিল্প।",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className={`${inter.className} min-h-screen`}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen mx-auto max-w-screen-2xl">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
