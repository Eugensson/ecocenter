import Link from "next/link";
import Image from "next/image";

import styles from '@/app/services/page.module.css'

export const metadata = {
    title: 'Послуги | ТОВ ЕЦПНВтаПТ',
    description: "Послуги у галузі екології та раціонального використання природних ресурсів",
  };

const Services = () => {
  return (
    <section>
        <h1>Послуги</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image
              src={"/ovd.svg"}
              width={30}
              height={30}
              alt="Іконка документа"
            />
            <Link href="/servicesOvd" className="text">Оцінка впливів на довкілля (ОВД)</Link>
          </li>
          <li className={styles.item}>
          <Image
              src={"/ovns.svg"}
              width={30}
              height={30}            
              alt="Іконка документа"
            />
            <Link href="/servicesOvns" className="text">Оцінка впливів на навколишнє середовище (ОВНС)</Link>
          </li>
          <li className={styles.item}>
            <Image
              src={"/seo.svg"}
              width={30}
              height={30}
              alt="Іконка листочка"
            />
            <Link href="/servicesSeo" className="text">Стратегічна екологічна оцінка (СЕО)</Link>
          </li>
          <li className={styles.item}>
          <Image
              src={"/szz.svg"}
              width={30}
              height={30}
              alt="Іконка документа"
            />
            <Link href="/servicesSzz" className="text">Обґрунтування встановлення/зменшення санітарно-захисної зони (СЗЗ)</Link>
          </li>          
          <li className={styles.item}>
            <Image
              src={"/atmosphere.svg"}
              width={30}
              height={30}
              alt="Іконка будівлі підприємства"
            />
            <Link href="/servicesAtmosphere" className="text">Охорона атмосферного повітря</Link>
          </li>
          <li className={styles.item}>
            <Image
              src={"/water.svg"}
              width={30}
              height={30}
              alt="Іконка краника для води"
            />
            <Link href="/servicesWater" className="text">Водопостачання та водовідведення</Link>
          </li>
          <li className={styles.item}>
            <Image
              src={"/waste.svg"}
              width={30}
              height={30}
              alt="Іконка урни для сміття"
            />
            <Link href="/servicesWaste" className="text">Промислові відходи та відходи споживання</Link>
          </li>
        </ul>
    </section>
  )
}

export default Services;