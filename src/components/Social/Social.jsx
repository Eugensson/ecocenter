import Link from 'next/link';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import styles from "@/components/Social/Social.module.css";

const Social = () => {
  return (
    <ul className={styles.list}>
      <li>
        <Link
          className={styles.link}
          href="https://telegram.org/"
          target="_blank"
          aria-label="Іконка Telegram"
        >
          <TelegramIcon fontSize="small"/>              
        </Link>
      </li>          
      <li>
        <Link
          className={styles.link}
          href="https://facebook.com/"
          target="_blank"
          aria-label="Іконка Facebook"
        >
          <FacebookIcon fontSize="small"/>              
        </Link>
      </li>
      <li>
        <Link
          className={styles.link}
          href="https://www.linkedin.com/"
          target="_blank"
          aria-label="Іконка linkedIn"
        >
          <LinkedInIcon fontSize="small"/>              
        </Link>
      </li>
    </ul>
  );
};

export default Social;