import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";

export const Header = () => {
  return (
    <header className="border-b-2 py-2">
      <div className="container flex items-center justify-between">
        <Logo className="hidden" />
        <div className="hidden lg:block">
          <Nav />
        </div>
        <div className="hidden lg:block">
          <ThemeToggle />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};
