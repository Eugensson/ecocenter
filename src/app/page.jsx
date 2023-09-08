import Image from 'next/image'
import styles from './page.module.css'

export const metadata = {
  title: 'Головна | ТОВ ЕЦПНВтаПТ',
  description: "Екологічні послуги по Україні",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Головна сторінка</h1>      
    </main>
  )
}
