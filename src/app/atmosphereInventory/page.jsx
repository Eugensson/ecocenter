import LinkBtn from "@/components/LinkBtn/LinkBtn";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const AtmosphereInventory = () => {
  return (
    <section className="sectionContainer">
        <h1>Інвентаризація джерел викидів</h1>
        <p className="text">Проведення інвентаризації викидів забруднюючих речовин виробничими об&#x2019;єднаннями та промисловими підприємствами, організаціями та установами, що викидають забруднюючі речовини в атмосферу, незалежно від їхнього відомчого підпорядкування та форми власності, вимагає проведення стилістичного та орфографічного рефакторингу.</p>
        <h2>Інвентаризація включає в себе:</h2>
        <p className="text"><CheckCircleIcon fontSize="small"/>Опис технологічних процесів та газоочисних установок з погляду формування та відведення забруднюючих речовин.</p>
        <p className="text"><CheckCircleIcon fontSize="small"/>Визначення параметрів стаціонарних джерел викидів.</p>
        <p className="text"><CheckCircleIcon fontSize="small"/>Характеристика неорганізованих джерел.</p>
        <h2>Матеріали інвентаризації використовуються для:</h2>
        <p className="text"><CheckCircleIcon fontSize="small"/>Розробки нормативів щодо викидів забруднюючих речовин у повітря при експлуатації технологічного обладнання, споруд та об&#x2019;єктів.</p>
        <p className="text"><CheckCircleIcon fontSize="small"/>Встановлення гранично допустимих рівнів викидів.</p>
        <p className="text"><CheckCircleIcon fontSize="small"/>Регулювання викидів забруднюючих речовин у повітря.</p>
        <p className="text"><CheckCircleIcon fontSize="small"/>Здійснення державного обліку стосовно охорони атмосферного повітря.</p>
        <p className="text"><CheckCircleIcon fontSize="small"/>Розробки короткострокових і довгострокових планів заходів для підприємств.</p>
        <p className="text"><CheckCircleIcon fontSize="small"/>Розробки екологічних програм зі зниження викидів забруднюючих речовин у повітря.</p>
        <p className="text"><CheckCircleIcon fontSize="small"/>Підготовки документів, які обґрунтовують обсяги викидів для отримання дозволу на викиди забруднюючих речовин у повітря від стаціонарних джерел.</p>
        <p className="text">Звіт з інвентаризації викидів забруднюючих речовин є складовою частиною матеріалів, на основі яких розробляються відповідні документи для отримання дозволів на викиди забруднюючих речовин у повітря від стаціонарних джерел для підприємств, установ, організацій та громадян-підприємців.</p>
        <p className="text">Кваліфіковані спеціалісти Центру з багаторічним досвідом робити в галузі охорони навколишнього природного середовища проведуть моніторинг потенційних джерел викидів на вашому підприємстві з відбором проб забруднюючих речовин, використовуючи сучасне обладнання. Відповідно до останніх змін нормативно-правових актів та чинних методик, зроблять відповідні розрахунки та підготують Звіт по інвентаризації викидів забруднюючих речовин для Вашого підприємства (установи, організації).</p>
        <LinkBtn text="До розділу" url="/servicesAtmosphere"/>
    </section>
  )
}

export default AtmosphereInventory