import Link from "next/link";
import Image from "next/image";

import Social from '@/components/Social/Social';

import styles from "@/components/TheFooter/TheFooter.module.css";

const TheFooter = () => {
  return (
    <footer className="footerContainer">
      <h2>Екологічний центр поводження з небезпечними відходами та промислової технології</h2>      
      <div className={styles.contactsWrapper}>
        <p className={styles.text}>Потрібна додаткова інформація? Зв’яжіться з нами: +38-067-395-62-56</p>
        <Link href="viber://chat?number=+380673956256" aria-label="Viber" className={styles.link}>
            <Image
              src={"/viber.svg"}
              width={20}
              height={20}
              alt="Іконка viber"
            />
        </Link>
        <Link href="whatsapp://send?phone=+380673956256" aria-label="WhatsApp" className={styles.link}>
            <Image
              src={"/whatsapp.svg"}
              width={20}
              height={20}
              alt="Іконка viber"
            />
        </Link>
      </div>      
      <h2>Ми у соцмежах</h2>
      <Social />
      <p className="copyrightText">&copy; 2023, ТОВ &quot;ЕЦ ПНВ ПТ&quot;. Всі права захищено.</p>
    </footer>
  );
};

export default TheFooter;