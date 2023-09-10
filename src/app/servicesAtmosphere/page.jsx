import Link from "next/link";

const ServicesAtmosphere = () => {
  return (
    <section className="textWrapper">
        <h1>Охорона атмосферного повітря</h1>
        <ul className="listWrapper">
          <li><Link href="/atmosphereInventory" className="text">Інвентаризація джерел викидів</Link></li>
          <li><Link href="/atmosphereReasoning" className="text">Підготовка обгрунтовуючих матеріалів для отримання дозволу на викиди</Link></li>
          <li><Link href="/atmosphereControlGdv" className="text">Підготовка Звітів по контролю норм ГДВ</Link></li>
          <li><Link href="/atmosphereGou" className="text">Розробка паспортів ГОУ</Link></li>
        </ul>
        <Link href="/services">До послуг</Link>
    </section>
  )
}

export default ServicesAtmosphere