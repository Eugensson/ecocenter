import { ThemeProvider } from "@/context/ThemeContext";
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import TheHeader from '@/components/TheHeader/TheHeader';
import TheFooter from "@/components/TheFooter/TheFooter";

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
            <TheHeader/>
            <main className="mainContainer">
               {children}
            </main>
            <TheFooter />
          </MobileMenuProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
