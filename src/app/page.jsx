import Link from "next/link";

export const metadata = {
  title: 'Головна | ТОВ ЕЦПНВтаПТ',
  description: "Екологічні послуги по Україні",
};

export default function Home() {
  return (
    <section className="textWrapper">
      <div className="imgWellcomeContainer"></div>
      <h1 className="visuallyHidden">Про екологічний центр поводження з небезпечними відходами та промислової технології</h1>
      <h2>Шановні відвідувачі!</h2>
      <p className="text">Ми раді вас вітати на нашому веб-сайті і висловлюємо щиру вдячність за ваш інтерес до діяльності ТОВ &quot;Екологічний центр поводження з небезпечними відходами та промислової технології&quot;. Ми впевнені, що наш ресурс має бути корисним для вас і надасть вам можливість скористатися нашими послугами.</p>
      <p className="text">Наша компанія - професійна та високоефективна команда фахівців, що спеціалізується у галузі охорони навколишнього природного середовища та раціонального використання природних ресурсів. Ми є колективом професіоналів і експертів, які вправно поєднують знання національного законодавства та міжнародних стандартів, щоб надавати професійні послуги нашим клієнтам.</p>
      <p className="text">Наша головна мета - бути надійними партнерами для наших клієнтів та надавати якісні та своєчасні послуги. Ми постійно підвищуємо свою кваліфікацію та здійснюємо відповідні акредитації, що підтверджуються нашими сертифікатами, свідоцтвами, атестатами та дипломами. Ми прагнемо до індивідуального підходу до кожного клієнта, щоб відповідати їхнім вимогам та очікуванням на найвищому рівні.</p>
      <p className="text">Наша компанія працює на ринку послуг з 2011 року і постійно розвивається. 12-річний успішний досвід, енергія та зобов&#x2019;язаність до досягнення позитивних результатів роблять нас надійними та відповідальними партнерами.</p>
      <p className="text">З нами ви економите час та гроші, отримуючи гарантовану якість послуг.</p>      
    </section>
  )
}
