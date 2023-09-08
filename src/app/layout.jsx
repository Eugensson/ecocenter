import { MobileMenuProvider } from '@/context/MobileMenuContext';
import TheHeader from '@/components/TheHeader/TheHeader';

import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["cyrillic"],
  variable: "--font-roboto",
  weight: ["400", "500", "700", "900"],
});

import './globals.css'

export const metadata = {
  title: 'Екоцентр',
  description: 'Екологічний центр поводження з небезпечними відходами та промислові технології',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <MobileMenuProvider>
          <TheHeader/>
          <main className="container">
             {children}
          </main>
        </MobileMenuProvider>
      </body>
    </html>
  )
}
