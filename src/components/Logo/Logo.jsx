import Link from "next/link";

import RecyclingIcon from '@mui/icons-material/Recycling';

const Logo = () => {
  return (
    <Link href="/" className="logo">
      <RecyclingIcon />
    </Link>
  );
};

export default Logo;