import Link from "next/link";

const ServicesWaste = () => {
    return (
      <section className="sectionContainer">
        <div className="bgiContainer bgiWaste"></div>
        <h1>Промислові відходи та відходи споживання</h1>
        <ul className="navList">
          <li><Link href="/wastePassportWaste" className="text">Паспортизація відходів</Link></li>
          <li><Link href="/wastePlan" className="text">Розробка плану управління відходами</Link></li>
          <li><Link href="/wasteDeclaration" className="text">Декларація про утворення відходів</Link></li>
          <li><Link href="/wasteInventory" className="text">Інвентаризація відходів</Link></li>
          <li><Link href="/wasteCard" className="text">Розробка реєстрових карт об&#x2019;єктів утворення, оброблення та утилізації відходів</Link></li>
          <li><Link href="/wastePassport" className="text">Паспортизація місць видалення відходів</Link></li>
          <li><Link href="/waste1wt" className="text">Звітність за формою № 1-BT</Link></li>
        </ul>
        <Link href="/services">До послуг</Link>
      </section>
    )
  }
  
  export default ServicesWaste