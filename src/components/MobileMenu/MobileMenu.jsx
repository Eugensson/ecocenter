import Link from 'next/link';

import { useMobileMenu } from '@/context/MobileMenuContext';

import styles from '@/components/MobileMenu/MobileMenu.module.css'

export default function MobileMenu() {
  const { closeMobileMenu } = useMobileMenu();

  return (
    <div className={styles.wrapper}>      
      <button type='button' className={styles.closeBtn} onClick={closeMobileMenu}></button>
      <nav className={styles.nav}>
          <Link href="/" onClick={closeMobileMenu}>Про ЕкоЦентр</Link>
          <Link href="/services" onClick={closeMobileMenu}>Послуги</Link>
          <Link href="/laboratory" onClick={closeMobileMenu}>Лабораторія</Link>
          <Link href="/qualification" onClick={closeMobileMenu}>Кваліфікація</Link>          
          <Link href="/news" onClick={closeMobileMenu}>Новини</Link>          
      </nav>
      <ul className={styles.list}>
            <li>
              <Link href="https://telegram.org/" target="_blank" className={styles.social}>Telegram</Link>
            </li>
            <li>
              <Link href="https://twitter.com/" target="_blank" className={styles.social}>Twitter</Link>
            </li>
            <li>
              <Link href="https://facebook.com/pokrov.ltd/" target="_blank" className={styles.social}>Facebook</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/" target="_blank" className={styles.social}>LinkedIn</Link>
            </li>            
      </ul>      
    </div>)
};