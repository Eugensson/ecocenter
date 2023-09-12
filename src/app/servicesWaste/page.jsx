import Link from 'next/link';
import LinkBtn from "@/components/LinkBtn/LinkBtn";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const metadata = {
  title: 'Відходи | ТОВ ЕЦПНВтаПТ',
  description: 'Промислові відходи та відходи споживання',
}

const ServicesWaste = () => {
    return (
      <section className="sectionContainer">
        <div className="bgiContainer bgiWaste"></div>
        <h1>Промислові відходи та відходи споживання</h1>
        <ul className="navList">
          <li className="navItem"><Link href="/wastePassportWaste" className="text"><CheckCircleIcon fontSize="small"/>Паспортизація відходів</Link></li>
          <li className="navItem"><Link href="/wastePlan" className="text"><CheckCircleIcon fontSize="small"/>Розробка плану управління відходами</Link></li>
          <li className="navItem"><Link href="/wasteDeclaration" className="text"><CheckCircleIcon fontSize="small"/>Декларація про утворення відходів</Link></li>
          <li className="navItem"><Link href="/wasteInventory" className="text"><CheckCircleIcon fontSize="small"/>Інвентаризація відходів</Link></li>
          <li className="navItem"><Link href="/wasteCard" className="text"><CheckCircleIcon fontSize="small"/>Розробка реєстрових карт об&#x2019;єктів утворення, оброблення та утилізації відходів</Link></li>
          <li className="navItem"><Link href="/wastePassport" className="text"><CheckCircleIcon fontSize="small"/>Паспортизація місць видалення відходів</Link></li>
          <li className="navItem"><Link href="/waste1wt" className="text"><CheckCircleIcon fontSize="small"/>Звітність за формою № 1-BT</Link></li>
        </ul>
        <LinkBtn text="До послуг" url="/services"/>
      </section>
    )
  }
  
  export default ServicesWaste