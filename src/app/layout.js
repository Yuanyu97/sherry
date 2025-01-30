import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sherry",
  description:
    "Hi Sherry, this is a website that I programmed (since I'm a programmer so it's only fitting HAHA) for you, hope you like it :)",
  openGraph: {
    title: "From: Fred, To: Sherry\n",
    description:
      "Hi Sherry, this is a website that I programmed (since I'm a programmer so it's only fitting HAHA) for you, hope you like it :)",
    url: "https://for-sherry.netlify.app", // Change this when deploying
    type: "website",
    images: [
      {
        url: "https://for-sherry.netlify.app/sherry/seo.jpg", // Ensure this image exists in `/public`
        width: 1200,
        height: 630,
        alt: "Sherry's Website Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "From: Fred, To: Sherry\n",
    description:
      "Hi Sherry, this is a website that I programmed (since I'm a programmer so it's only fitting HAHA) for you, hope you like it :)",
    images: ["https://for-sherry.netlify.app/sherry/seo.jpg"], // Same image as Open Graph
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Font "Protest Riot" */}
        <link
          href="https://fonts.googleapis.com/css2?family=Protest+Riot&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}