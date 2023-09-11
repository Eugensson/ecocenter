import Link from "next/link";

const ServicesWater = () => {
    return (
      <section className="sectionContainer">
          <div className="bgiContainer bgiWater"></div>
          <h1>Спеціальне водокористування</h1>
          <ul className="navList">
            <li><Link href="/waterSvk" className="text">Розробка дозволу на спеціальне водокористування</Link></li>
            <li><Link href="/waterGds" className="text">Розробка проектів нормативів гранично-допустимих скидів</Link></li>
            <li><Link href="/waterNorms" className="text">Розробка питомих норм водоспоживання та водовідведення, індивідуальних технологічних нормативів використання питної води</Link></li>
            <li><Link href="/waterPassport" className="text">Розробка паспортів свердловин</Link></li>
            <li><Link href="/waterZso" className="text">Розробка проектів зон санітарної охорони джерел питного та господарсько-побутового водопостачання</Link></li>
            <li><Link href="/waterPod" className="text">Допомога у веденні журналів первинного обліку та звітної за фомами ПОД-11, ПОД-12 та ПОД-13</Link></li>
            <li><Link href="/water2tp" className="text">Звітність за формою № 2 тп - водгосп</Link></li>
          </ul>
          <Link href="/services">До послуг</Link>
      </section>
    )
  }
  
  export default ServicesWater