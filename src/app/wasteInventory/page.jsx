import Link from "next/link";

const WasteInventory = () => {
  return (
    <section className="textWrapper">
        <h1>Інвентаризація відходів</h1>
        <p className="text">Інвентаризація відходів - це складний процес, що передбачає комплекс заходів з виявлення, ідентифікації, опису та реєстрації відходів, а також обліку обсягів їх утворення, утилізації та видалення. Також цей процес включає в себе виявлення та огляд місць утворення відходів і об&#x2019;єктів, що пов&#x2019;язані з ними (пункт 2 Постанови Кабінету Міністрів України від 01.11.1999 № 2034 &quot;Про затвердження Порядку ведення державного обліку та паспортизації відходів&quot;).</p>
        <p className="text">Головною метою проведення інвентаризації є отримання повної інформації про утворення та рух відходів, їх ідентифікацію, класифікацію та відповідну нормативно-технічну документацію. Також важливо визначити небезпечні властивості впливу на довкілля та здоров&#x2019;я людини, розробити оптимальні стратегії оброблення відходів та удосконалення системи їхнього управління на підприємстві.</p>
        <p className="text">Зверніться до фахівців Центру, які мають великий досвід та відповідні знання в цій сфері. Вони готові надати вам допомогу у розробці та підготовці відповідної документації.</p>
        <Link href="/servicesWaste">Повернутися до розділу</Link>
    </section>
  )
}

export default WasteInventory