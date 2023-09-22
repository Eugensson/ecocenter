import { ThemeProvider } from "@/context/ThemeContext";
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import Header from '@/components/Header/Header';
import Footer from "@/components/Footer/Footer";

import './globals.css'

import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["cyrillic"],
  variable: "--font-roboto",
  weight: ["400", "500", "700", "900"],
});


export const metadata = {
  title: 'Екоцентр',
  description: 'Екологічний центр поводження з небезпечними відходами та промислові технології',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          <MobileMenuProvider>
            <Header />
            <main className="container">
               {children}
            </main>
            <Footer />
          </MobileMenuProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
