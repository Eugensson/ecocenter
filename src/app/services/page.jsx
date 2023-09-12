import Link from "next/link";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import GradingIcon from '@mui/icons-material/Grading';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import FactoryIcon from '@mui/icons-material/Factory';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import DeleteIcon from '@mui/icons-material/Delete';

export const metadata = {
    title: 'Послуги | ТОВ ЕЦПНВтаПТ',
    description: "Послуги у галузі екології та раціонального використання природних ресурсів",
  };

const Services = () => {
  return (
    <section className="sectionContainer">
      <div className="bgiContainer bgiServices"></div>
      <h1>Послуги:</h1>
      <ul className="navList">
        <li className="navItem">
          <Link href="/servicesOvd" className="text" aria-label="Іконка документа"><SaveAsIcon fontSize="small"/>Оцінка впливів на довкілля (ОВД)</Link>
        </li>
        <li className="navItem">
          <Link href="/servicesOvns" className="text" aria-label="Іконка документа"><GradingIcon fontSize="small"/>Оцінка впливів на навколишнє середовище (ОВНС)</Link>
        </li>
        <li className="navItem">
          <Link href="/servicesSeo" className="text" aria-label="Іконка документа"><ContentPasteSearchIcon fontSize="small"/>Стратегічна екологічна оцінка (СЕО)</Link>
        </li>
        <li className="navItem">
          <Link href="/servicesSzz" className="text" aria-label="Іконка документа"><NoteAltIcon fontSize="small"/>Обґрунтування встановлення/зменшення санітарно-захисної зони (СЗЗ)</Link>
        </li>          
        <li className="navItem">
          <Link href="/servicesAtmosphere" className="text" aria-label="Іконка будівлі підприємства"><FactoryIcon fontSize="small"/>Охорона атмосферного повітря</Link>
        </li>
        <li className="navItem">
          <Link href="/servicesWater" className="text" aria-label="Іконка крапельки води"><WaterDropIcon fontSize="small"/>Водопостачання та водовідведення</Link>
        </li>
        <li className="navItem">
          <Link href="/servicesWaste" className="text" aria-label="Іконка урни для сміття"><DeleteIcon fontSize="small"/>Промислові відходи та відходи споживання</Link>
        </li>
      </ul>
    </section>
  )
}

export default Services;