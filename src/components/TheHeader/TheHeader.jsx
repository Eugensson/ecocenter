'use client';

import MenuIcon from '@mui/icons-material/Menu';

import { useMobileMenu } from '@/context/MobileMenuContext';
import { Navigation } from '@/components/Navigation/Navigation';
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import { navItems } from '@/data/navItems';

import styles from '@/components/TheHeader/TheHeader.module.css';

const TheHeader = () => {
  const {isMobileMenuOpen, openMobileMenu } = useMobileMenu();

  return (
    <header className={styles.wrapper}>      
        <button type='button' className={styles.burgerBtn} onClick={openMobileMenu}>
          <MenuIcon
           color="success"
         />
        </button>
        {isMobileMenuOpen && <MobileMenu/>}
      <Navigation navLinks={navItems} />      
    </header>
  );
};

export default TheHeader;