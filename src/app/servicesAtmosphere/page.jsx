import Link from "next/link";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ServicesAtmosphere = () => {
  return (
    <section className="sectionContainer">
        <div className="bgiContainer bgiAtmospere"></div>
        <h1>Охорона атмосферного повітря</h1>
        <ul className="navList">
          <li className="navItem"><Link href="/atmosphereInventory" className="text"><CheckCircleIcon fontSize="small"/>Інвентаризація джерел викидів</Link></li>
          <li className="navItem"><Link href="/atmosphereReasoning" className="text"><CheckCircleIcon fontSize="small"/>Підготовка обгрунтовуючих матеріалів для отримання дозволу на викиди</Link></li>
          <li className="navItem"><Link href="/atmosphereGou" className="text"><CheckCircleIcon fontSize="small"/>Розробка паспортів ГОУ</Link></li>
          <li className="navItem"><Link href="/atmosphereOblik" className="text"><CheckCircleIcon fontSize="small"/>Державний облік</Link></li>
        </ul>
        <Link href="/services">До послуг</Link>
    </section>
  )
}

export default ServicesAtmosphere