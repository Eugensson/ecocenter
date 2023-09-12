import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="logo" >
        <Image
          src={"/logo.svg"}
          width={100}
          height={100}
          alt="Логотип"
        />
    </Link>
  );
};

export default Logo;