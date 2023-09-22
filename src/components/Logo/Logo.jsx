import Link from "next/link";
import Image from "next/image";

import styles from "@/components/Logo/Logo.module.css";

const Logo = () => {
  return (
    <Link href="/" className={styles.logo} >
        <Image
          src={"/logo.svg"}
          width={50}
          height={50}
          alt="Логотип"
        />
    </Link>
  );
};

export default Logo;