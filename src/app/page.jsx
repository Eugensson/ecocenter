import Link from "next/link";

export const metadata = {
  title: 'Головна | ТОВ ЕЦПНВтаПТ',
  description: "Екологічні послуги по Україні",
};

export default function Home() {
  return (
    <section className="sectionContainer">
      <div className="bgiContainer bgiWellcome"></div>
      <h1 className="visuallyHidden">Про екологічний центр поводження з небезпечними відходами та промислової технології</h1>
      <h2>Шановні відвідувачі!</h2>
      <p className="text">Вітаємо вас на веб-сайті компанії ТОВ &quot;Екологічний центр поводження знебезпечними відходами та промислової технології&quot; та висловлюємо щиру вдячність за інтерес до нашої діяльності. Ми впевнені, що цей ресурс буде корисним для вас та допоможе застосувати сучасні механізми екологічного менеджменту для ефективного розвитку вашого підприємства.</p>
      <p className="text">Наша компанія – це спеціалізоване екологічне підприємство, яке надає послуги у галузі охорони навколишнього природного середовища та раціонального використання природних ресурсів. Професійна та високоефективна команда фахівців товариства виготовить екологічну документацію будь-якої складності та здійснить супровід матеріалів для гарантованого проходження необхідних узгоджень в наглядових та експертних органах. Ми готові надати консультаційну підтримку, запропонувати практичні рішення, допомогти реалізувати локальні чи комплексні проєкти.</p>
    </section>
  )
}
