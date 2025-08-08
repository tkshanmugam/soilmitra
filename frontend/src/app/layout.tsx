import "./globals.css";
import type { Metadata } from "next";
import LayoutWrapper from "./components/LayoutWrapper";

export const metadata: Metadata = {
  title: "SoilMitra",
  description: "Your AI-powered organic farming and fertilizer schedule assistant.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+Tamil:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
