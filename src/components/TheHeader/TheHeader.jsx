'use client';

import { useMobileMenu } from '@/context/MobileMenuContext';
import { Navigation } from '@/components/Navigation/Navigation';
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';
import Logo from '@/components/Logo/Logo';
import { navItems } from '@/data/navItems';

const TheHeader = () => {
  const {isMobileMenuOpen, openMobileMenu } = useMobileMenu();

  return (
    <header className="headerContainer">      
      <Logo/>
      <span className="burger" type='button' onClick={openMobileMenu}></span>
      {isMobileMenuOpen && <MobileMenu/>}
      <Navigation navLinks={navItems} />
      <DarkModeToggle/>
    </header>
  );
};

export default TheHeader;