import { Bricolage_Grotesque, DM_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-dm-mono" });
const pixel = Pixelify_Sans({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-pixel" });

const description =
  "Skander Ben Mekki is a software engineer at AppDirect who builds reliable backend and full-stack systems, and the occasional 2D ninja game.";

export const metadata = {
  title: "Skander Ben Mekki — Software Engineer",
  description,
  openGraph: { title: "Skander Ben Mekki — Software Engineer", description, type: "website" },
};

export const viewport = { themeColor: "#fff4dc" };

// Restores the saved mood before paint so the page never flashes the default.
const moodScript = `(function(){try{var m=localStorage.getItem("mood");if(m)document.documentElement.dataset.mood=m}catch(e){}})()`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${dmMono.variable} ${pixel.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: moodScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
