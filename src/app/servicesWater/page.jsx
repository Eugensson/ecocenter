import Link from "next/link";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ServicesWater = () => {
    return (
      <section className="sectionContainer">
          <div className="bgiContainer bgiWater"></div>
          <h1>Спеціальне водокористування</h1>
          <ul className="navList">
            <li className="navItem"><Link href="/waterSvk" className="text"><CheckCircleIcon fontSize="small"/>Розробка дозволу на спеціальне водокористування</Link></li>
            <li className="navItem"><Link href="/waterGds" className="text"><CheckCircleIcon fontSize="small"/>Розробка проектів нормативів гранично-допустимих скидів</Link></li>
            <li className="navItem"><Link href="/waterNorms" className="text"><CheckCircleIcon fontSize="small"/>Розробка питомих норм водоспоживання та водовідведення, індивідуальних технологічних нормативів використання питної води</Link></li>
            <li className="navItem"><Link href="/waterPassport" className="text"><CheckCircleIcon fontSize="small"/>Розробка паспортів свердловин</Link></li>
            <li className="navItem"><Link href="/waterZso" className="text"><CheckCircleIcon fontSize="small"/>Розробка проектів зон санітарної охорони джерел питного та господарсько-побутового водопостачання</Link></li>
            <li className="navItem"><Link href="/waterPod" className="text"><CheckCircleIcon fontSize="small"/>Допомога у веденні журналів первинного обліку та звітної за фомами ПОД-11, ПОД-12 та ПОД-13</Link></li>
            <li className="navItem"><Link href="/water2tp" className="text"><CheckCircleIcon fontSize="small"/>Звітність за формою № 2 тп - водгосп</Link></li>
          </ul>
          <Link href="/services">До послуг</Link>
      </section>
    )
  }
  
  export default ServicesWater