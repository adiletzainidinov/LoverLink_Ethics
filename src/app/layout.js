import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata = {
  title: "Этичное использование LoveLink",
  description:
    "LoveLink создан для искренних и добрых намерений. Узнайте, как использовать сервис с уважением, честностью и заботой о другом человеке.",
  keywords: ["LoveLink", "этика", "уважение", "FeelLink", "подарок"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${geist.variable} h-full`}>
      <body>{children}</body>
    </html>
  );
}
