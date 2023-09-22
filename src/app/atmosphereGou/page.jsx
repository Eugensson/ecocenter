import LinkBtn from "@/components/LinkBtn/LinkBtn";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const metadata = {
  title: 'Паспортизація ГОУ | ТОВ ЕЦП НВ ПТ',
  description: "Розробка паспортів установок очистки газу",
};

const AtmosphereGou = () => {
  return (
    <section className="sectionContainer">
    <h1>Розробка паспортів ГОУ</h1>
    <p className="text">Господарська діяльність підприємства безпосередньо впливає на довкілля, а викиди забруднюючих речовин в атмосферне повітря завдають шкоди не тільки навколишньому природному середовищу, а й здоровю людини. Відтак, підприємство, що здійснює викиди забруднюючих речовин повинно забезпечувати їх нормативні концентрації та у разі перевищення докустимих викидів впроваджувати заходи щодо зменшення викидів до нормативно-допустимих, забезпечувати очищистку від небезпечних та шкідливих речовин. Установка очистки газу (далі - ГОУ) - комплекс споруд, призначений для відведення, транспортування та вловлювання з газопилового потоку, що відводиться від технологічного обладнання, наявних у ньому забруднюючих речовин. ГОУ складається з газоочисних апаратів, допоміжного обладнання, контролюючих приладів і комунікацій. Підприємство внаслідок використання газоочисних споруд не тільки скорочує обсяг викидів забруднюючих речовин в повітря, а й заощаджує кошти на сплаті екологічного податку. Будь-яке підприємство, яке використовує під час виробництва, спеціальне газоочисне обладнання, повинно мати паспорт газоочисної споруди, що  відповідає Правилам технічної експлуатації установок очистки газу, затведжених наказом Міністерства охорони навколишнього природного середовища України від 06.02.2009 № 52 (далі - Правила).</p>
    <p className="text">Відповідно до Правил суб&#x2019;єкт господарювання зобов&#x2019;язаний забезпечувати безперебійну ефективну роботу і безпечну експлуатацію ГОУ, підтримувати у справному стані споруди, устаткування та апаратуру для очищення викидів; здійснювати перевірку для встановлення відповідності фактичних показників роботи ГОУ до проектних для забруднюючих речовин І-ІІ класів небезпеки двічі на рік, а для забруднюючих речовин IV-V класів небезпеки – один раз на рік. У випадку відсутності встановленого класу небезпеки забруднюючих речовин, перевірка для встановлення відповідності проводиться двічі на рік, так само як і для забруднюючих речовин І-ІІ класів небезпеки.</p>
    <h2>Процес оформлення паспорта ГОУ складється:</h2>    
    <p className="text"><CheckCircleIcon fontSize="small"/>Виїзд фахівця центру на об&#x2019;єкт, де встановлена ГОУ.</p>
    <p className="text"><CheckCircleIcon fontSize="small"/>Проведення обстеження ГОУ на місці для виявлення можливих збоїв в роботі чи дефектів, складення схеми ГОУ.</p>
    <p className="text"><CheckCircleIcon fontSize="small"/>Проведення випробувань та забір зразків газопилового потоку до та після очищення, для аналізу ефективності роботи ГОУ.</p>
    <p className="text"><CheckCircleIcon fontSize="small"/>Опрацювання та узагальнення отриманих даних та результатів випробувань.</p>
    <p className="text"><CheckCircleIcon fontSize="small"/>Складання протоколів випробувань та вимірювань.</p>
    <p className="text"><CheckCircleIcon fontSize="small"/>Оформлення паспорту ГОУ.</p>
    <p className="text"><CheckCircleIcon fontSize="small"/>Підготовка звіту про здійснення випробувань у відповідності з Правилами.</p>
    <p className="text"><CheckCircleIcon fontSize="small"/>Подання розробленого паспорту ГОУ для реєстрації в територіальне управління екології та природних ресурсів.</p>
    <p className="text">Під час складання звіту інвентаризації джерел викидів забруднюючих речовин в атмосферне повітря для отримання дозволу на викиди забруднюючих речовин в атмосферне повітря, наявність належним чином  зареєстрованого паспорту ГОУ є обов’язковою. Досить розповсюдженою практикою є паспортизація ГОУ під час проведення комплексу робіт для отримання дозволу на викиди.</p>
    <p className="text">Оскільки, процес паспортизації вимагає достатнього часу, навичок, знань та є складним технологічним процесом, то краще це довірити висококваліфікованим спеціалістам в сфері охорони атмосферного повітря та проведення лабораторних досліджень. Звернувшись до нашого центру, Ви можете бути впевнені в якості виконаної роботи та належному оформленні паспортів ГОУ в обумовлені терміни.</p>
    <LinkBtn text="До розділу" url="/servicesAtmosphere"/>
</section>
  )
}

export default AtmosphereGou