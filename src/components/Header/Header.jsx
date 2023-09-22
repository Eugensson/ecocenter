'use client';

import { useMobileMenu } from '@/context/MobileMenuContext';
import { Navigation } from '@/components/Navigation/Navigation';
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';
import Logo from '@/components/Logo/Logo';
import { navItems } from '@/data/navItems';

import styles from "@/components/Header/Header.module.css";

const TheHeader = () => {
  const {isMobileMenuOpen, openMobileMenu } = useMobileMenu();

  return (
    <header className={styles.wrapper}>      
      <Logo/>
      <span className={styles.burger} type='button' onClick={openMobileMenu}></span>
      {isMobileMenuOpen && <MobileMenu/>}
      <Navigation navLinks={navItems} />
      <DarkModeToggle/>
    </header>
  );
};

export default TheHeader;