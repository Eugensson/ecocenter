import Link from "next/link";

const WastePassport = () => {
  return (
    <section className="textWrapper">
        <h1>Паспортизація місць видалення відходів</h1>
        <p className="text">Паспорт місця видалення відходів (МВВ) - це офіційний документ, який розробляється на виконання постанови Кабінету Міністрів України від 03.08.1998 № 1216 &quot;Про затвердження Порядку ведення реєстру місць видалення відходів&quot; та відповідно до Інструкції щодо складання та змісту паспорта місця видалення відходів, затвердженої наказом Міністерства охорони навколишнього природного середовища та ядерної безпеки України від 14.01.1999 № 12.</p>
        <p className="text">До місць видалення відходів включаються також місця довгострокового (понад 2 роки) зберігання відходів. Процес створення паспорта базується на інвентаризаційних даних МВВ та включає в себе вихідні дані проектів, матеріали виробничої паспортизації відходів (що утворювалися і видалялися), дані з карток і відомостей прибутково-видаткових документів, моніторингу та результати спеціальних робіт. Також враховується інформація від спеціально уповноважених органів виконавчої влади у сфері поводження з відходами та матеріали постійно діючих комісій з питань поводження з безхазяйними відходами при місцевих державних адміністраціях та органах місцевого самоврядування.</p>
        <p className="text">Кваліфіковані фахівці нашого Центру проведуть повний спектр досліджень, спостережень, збору та обробку даних щодо МВВ, включаючи лабораторні виміри. Керуючись специфікою робіт у цій сфері, ми підготуємо паспорт місця видалення відходів та подадо його на реєстрацію до відповідних дозвільних органів.</p>
        <Link href="/servicesWaste">Повернутися до розділу</Link>
    </section>
  )
}

export default WastePassport