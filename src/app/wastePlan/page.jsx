import Link from "next/link";

const WastePlan = () => {
  return (
    <section className="sectionContainer">
        <h1>Розробка плану управління відходами</h1>
        <p className="text">План управління відходами – документ розроблений для визначення підходу до управління відходами на підприємстві,відповідно до національного законодавства та міжнародних стандартів.</p>
        <p className="text">В липні 2023 року набув чинності Закон України «Про управління відходами», яким визначені правові, організаційні, економічні засади діяльності щодо запобігання утворенню, зменшення обсягів утворення відходів, зниження негативних наслідків від діяльності з управління відходами, сприяння підготовці відходів до повторного використання, рециклінгу і відновленню з метою запобігання їх негативному впливу на здоров’я людей та навколишнє природне середовище. Закон наближає нормативно-правове регулювання відносин у сфері управління відходами до вимог ЄС та спрямований на покращення стану навколишнього середовища і створення інфраструктури об’єктів управління відходами.</p>
        <p className="text">На виконання вимог пункту 1 статті 53 Закону утворювачі відходів, які подають декларацію про відходи, суб’єкти господарювання у сфері управління відходами розробляють плани управління відходами. У планах зазначаються прогнозні показники утворення відходів, їх код та найменування, заходи, яких планується вжити для запобігання утворенню та зменшення обсягів відходів, їх належного збирання, перевезення, оброблення, виконання інших зобов’язань.</p>
        <Link href="/servicesWaste">Повернутися до розділу</Link>
    </section>
  )
}

export default WastePlan