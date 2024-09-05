import Link from "next/link";
import { PiTelegramLogoThin } from "react-icons/pi";
import { SiWhatsapp, SiViber } from "react-icons/si";

import { Logo } from "@/components/logo";

export const Footer = () => {
  return (
    <footer className="border-t py-2">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-2">
        <Logo />
        <ul className="flex items-center gap-5 mx-auto md:mx-0 md:ml-auto">
          <li>
            <Link
              href="https://telegram.org/"
              target="_blank"
              aria-label="Іконка Telegram"
              className="text-slate-500 opacity-80 hover:opacity-100 transition-opacity duration-200 ease-in-out"
            >
              <PiTelegramLogoThin size={34} />
            </Link>
          </li>
          <li>
            <Link
              href="viber://chat?number=+380673956256"
              aria-label="Viber"
              className="text-blue-600 "
            >
              <SiViber size={30} />
            </Link>
          </li>
          <li>
            <Link
              href="whatsapp://send?phone=+380673956256"
              aria-label="WhatsApp"
              className="text-green-600 opacity-80 hover:opacity-100 transition-opacity duration-200 ease-in-out"
            >
              <SiWhatsapp size={30} />
            </Link>
          </li>
        </ul>
        <span className="md:col-span-2 text-[8px] md:text-xs text-center text-foreground/75 dark:text-foreground/50">
          &copy; 2024, ТОВ &quot;ЕЦ ПНВ ПТ&quot;. Усі права захищено.
        </span>
      </div>
    </footer>
  );
};
