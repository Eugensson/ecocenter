import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from '@/components/Navigation/Navigation.module.css';

const Navigation = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {navLinks.map(link => {
        const isActive = pathname === link.href;

        const linkClassName = `${styles.link} ${isActive ? styles.active : ''}`;

        return (
          <Link key={link.label} href={link.href} className={linkClassName}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export { Navigation };