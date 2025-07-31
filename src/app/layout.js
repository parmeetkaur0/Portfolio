import "./globals.css";
import { Inter } from "next/font/google";
import ThemeProviderWrapper from "./components/ThemeProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Parmeet.dev",
  description: "Portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
