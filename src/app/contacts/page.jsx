import Link from 'next/link';
import BusinessIcon from '@mui/icons-material/Business';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FaxIcon from '@mui/icons-material/Fax';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PhoneIcon from '@mui/icons-material/Phone';
import Map from "@/components/Map";

import styles from '@/app/contacts/page.module.css';

export const metadata = {
    title: 'Контакти | ТОВ ЕЦПНВтаПТ',
    description: "Контактна інформація ТОВ ЕЦПНВтаПТ",
  };

const Contacts = () => {
  return (
    <section className="sectionContainer">
      <div className="bgiContainer bgiContacts"></div>
      <h1>Контакти</h1>
      <div className="subSectionContainer">
        <div className="contactContainer">
          <p className="text"><BusinessIcon/>18000, м. Черкаси, вул. Святотроїцька, 102/1, офіс: 3, 5</p>
          <Link className="text" href="mailto:ncpnv21@ukr.net"><ContactMailIcon/>ncpnv21@ukr.net</Link>
          <Link className="text" href="tel:+380472361014"><FaxIcon/>+38-0472-361-014</Link>
          <Link className="text" href="tel:+380472361014"><ContactPhoneIcon/>+38-0472-361-014</Link>
          <Link className="text" href="tel:+380673956256"><PhoneIcon/>+38-067-395-62-56</Link>
        </div>
        <div className="mapContainer">
          <h2>Мапа проїзду</h2>
          <Map/>
        </div>
      </div>
      
    </section>
  )
}

export default Contacts;