import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="logo" >
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