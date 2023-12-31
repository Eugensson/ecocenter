import LinkBtn from "@/components/LinkBtn/LinkBtn";

export const metadata = {
  title: 'СЗЗ | ТОВ ЕЦП НВ ПТ',
  description: 'Обґрунтування встановлення/зменшення санітарно-захисної зони (СЗЗ)',
}

const ServicesSzz = () => {
    return (
      <section className="sectionContainer">
          <div className="bgiContainer bgiSzz"></div>
          <h1>Обґрунтування встановлення/зменшення санітарно-захисної зони (СЗЗ)</h1>
          <p className="text">Санітарно-захисна зона (СЗЗ) – це територія, що оточує потенційно небезпечні підприємства, де заборонені проживання населення та господарська діяльність. Розміри СЗЗ визначаються згідно з проектною документацією та державними нормативами. Санітарно-захисні зони створюються навкола джерел виділення шкідливих речовин, запахів, шуму, вібрацій, ультразвуків, електромагнітних хвиль тощо з метою відокремлення їх від житлових територій.</p>
          <p className="text">Згідно зі статтею 114 Земельного Кодексу України, СЗЗ формуються навколо об&#x2019;єктів, що видають шкідливі речовини, запахи, шум, вібрації, ультразвуки, електромагнітні поля, іонізуюче випромінювання тощо з метою відокремлення їх від житлових територій. У межах СЗЗ заборонено будівництво житлових, соціальних та інших об&#x2019;єктів, призначених для постійного перебування людей. Правовий статус земель в СЗЗ визначається законами України.</p>
          <p className="text">СЗЗ призначена для захисту населення від негативних впливів виробничих факторів, таких як пил, гази, шум, вібрації тощо. Рівень цих факторів на межі СЗЗ не повинен перевищувати гігієнічних норм для населених місць. Також СЗЗ встановлює межі містобудівного регулювання та захищає підприємство від непідставних претензій мешканців та органів державного контролю.</p>
          <p className="text">Розміри СЗЗ для промислових підприємств та інших джерел виробничих шкідливостей встановлюються відповідно до діючих санітарних норм та розрахунків рівнів шуму та електромагнітних випромінювань з урахуванням реальної санітарної ситуації.</p>
          <p className="text">Спеціалісти нашого центру мають досвід у розробці спеціальних проектів, спрямованих на зменшення негативного впливу санітарних факторів на здоров&#x2019;я людей та обґрунтування можливості зменшення розмірів СЗЗ.</p>
          <LinkBtn text="До послуг" url="/services"/>
      </section>
    )
  }

  export default ServicesSzz;