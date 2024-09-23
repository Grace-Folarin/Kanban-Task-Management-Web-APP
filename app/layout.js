import Navigation from "@/components/Layouts/Navigation";

import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-plus_jakarta_sans-",
});

export const metadata = {
  title: "Kanban Task Management",
  description:
    "Akande Olalekan Toheeb's Front-end Mentor Kanban Task Management Challenge",
  applicationName: "Akande Olalekan Toheeb's Kanban Task Management",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Front-end Development",
    "Task Management",
    "Challenge",
    "Front-end Mentor",
  ],
  authors: [{ name: "Akande Olalekan Toheeb" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "/favicon.ico",
      url: "/favicon.ico",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navigation>{children}</Navigation>
    </html>
  );
}
