import Link from 'next/link';
import BusinessIcon from '@mui/icons-material/Business';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FaxIcon from '@mui/icons-material/Fax';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PhoneIcon from '@mui/icons-material/Phone';
import Social from '@/components/Social/Social';

const TheFooter = () => {  
  return (
    <footer className="footerContainer">
      <h2>Екологічний центр поводження з небезпечними відходами та промислової технології</h2>      
      <h2>Контактна інформація:</h2>
      <ul className="navList">
        <li className="navItem"><p className="text"><BusinessIcon fontSize="small" aria-label="Іконка будівлі"/>18000, м. Черкаси, вул. Святотроїцька, 102/1, офіс: 3, 5</p></li>
        <li className="navItem"><Link className="text" href="mailto:ncpnv21@ukr.net"><ContactMailIcon fontSize="small" aria-label="Іконка візитівки з листом"/>ncpnv21@ukr.net</Link></li>
        <li className="navItem"><Link className="text" href="tel:+380472361014"><FaxIcon fontSize="small" aria-label="Іконка факсимільного телефону"/>+38-0472-361-014</Link></li>
        <li className="navItem"><Link className="text" href="tel:+380472361014"><ContactPhoneIcon fontSize="small" aria-label="Іконка візитівки з телефонною слухавкою"/>+38-0472-361-014</Link></li>
        <li className="navItem"><Link className="text" href="tel:+380673956256"><PhoneIcon fontSize="small" aria-label="Іконка телефонної слухавки"/>+38-067-395-62-56</Link></li>
      </ul>
      <h2>Ми у соцмежах</h2>
      <Social width={30} height={30}/>
      <p className="copyrightText">&copy; 2023, ТОВ ЕЦПНВтаПТ. Всі права захищено.</p>
    </footer>
  );
};

export default TheFooter;