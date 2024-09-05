import { cn } from "@/lib/utils";
import Link from "next/link";
import { GiEcology } from "react-icons/gi";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className="flex justify-center md:justify-start items-center gap-2 text-green-900 dark:text-green-500"
    >
      <GiEcology size={44} />
      <span
        className={cn(
          "xl:flex flex-col items-start text-[10px] text-center md:text-start md:text-xs",
          className
        )}
      >
        Екологічний Центр
        <br />
        поводження з небезпечними відходами
        <br />
        та промислової технології
      </span>
    </Link>
  );
};
