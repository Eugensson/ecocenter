import Link from 'next/link';
import BusinessIcon from '@mui/icons-material/Business';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FaxIcon from '@mui/icons-material/Fax';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PhoneIcon from '@mui/icons-material/Phone';
import Map from "@/components/Map";

import styled from '@/app/contacts/page.module.css';

export const metadata = {
    title: 'Контакти | ТОВ ЕЦПНВтаПТ',
    description: "Контактна інформація ТОВ ЕЦПНВтаПТ",
  };

const Contacts = () => {
  return (
    <section className={styled.wrapper}>
      <h2>Контакти</h2>      
      <p className={styled.text}><BusinessIcon/>18000, м. Черкаси, вул. Святотроїцька, 102/1, офіс: 3, 5</p>      
      <Link className={styled.text} href="mailto:ncpnv21@ukr.net"><ContactMailIcon/>ncpnv21@ukr.net</Link>
      <Link className={styled.text} href="tel:+380472361014"><FaxIcon/>+38-0472-361-014</Link>      
      <Link className={styled.text} href="tel:+380472361014"><ContactPhoneIcon/>+38-0472-361-014</Link>      
      <Link className={styled.text} href="tel:+380673956256"><PhoneIcon/>+38-067-395-62-56</Link>
      <h2>Мапа проїзду</h2>
      <Map/>
    </section>
  )
}

export default Contacts;