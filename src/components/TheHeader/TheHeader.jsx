'use client';

import MenuIcon from '@mui/icons-material/Menu';

import { useMobileMenu } from '@/context/MobileMenuContext';
import { Navigation } from '@/components/Navigation/Navigation';
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';
import { navItems } from '@/data/navItems';

import styles from '@/components/TheHeader/TheHeader.module.css';

const TheHeader = () => {
  const {isMobileMenuOpen, openMobileMenu } = useMobileMenu();

  return (
    <header className={styles.wrapper}>      
        {/* <button type='button' onClick={openMobileMenu}>
          <span className={styles.bar}></span>          
        </button> */}
        <span className={styles.bar} type='button' onClick={openMobileMenu}></span>
        <DarkModeToggle/>
        {isMobileMenuOpen && <MobileMenu/>}
      <Navigation navLinks={navItems} />      
    </header>
  );
};

export default TheHeader;