import LinkBtn from "@/components/LinkBtn/LinkBtn";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ServicesSeo = () => {
    return (
      <section className="sectionContainer">
          <div className="bgiContainer bgiSeo"></div>
          <h1>Стратегічна екологічна оцінка</h1>
          <p className="text">Стратегічна екологічна оцінка (СЕО) є процедурою аналізу впливу планованої діяльності на довкілля, яка буде проводитися під час розроблення документа державного планування до його подання на затвердження. Метою є визначення та зменшення можливих негативних наслідків на довкілля, а також забезпечення сталого розвитку та охорони навколишнього середовища, безпеки життєдіяльності та здоров&#x2019;я населення.</p>
          <p className="text">Необхідність проведення СЕО передбачена Законом України &quot;Про стратегічну екологічну оцінку&quot; від 20.03.2018 № 2354-VIII. Закон вимагає проводити оцінку для всіх документів державного планування, включаючи генеральні плани населених пунктів, з урахуванням можливого впливу на довкілля та наслідків цього впливу на різних проміжках часу, з урахуванням накопичення, синергетичного та кумулятивного ефектів до стадії впровадження стратегічної ініціативи.</p>
          <p className="text">Мета СЕО документа детального плану території (ДПТ) полягає в оцінці наслідків виконання документів державного планування, забезпеченні сталого розвитку та охороні навколишнього середовища, безпеки життя та здоров&#x2019;я населення, а також в інтеграції екологічних вимог під час розроблення та затвердження документів державного планування. Замовником може бути орган виконавчої влади або орган місцевого самоврядування, який відповідає за розроблення документів державного планування або інша визначена законодавством сторона.</p>
          <h2>Етапи проведення СЕО:</h2>
          <p className="text"><CheckCircleIcon fontSize="small"/>Визначення обсягу СЕО<br/>Замовник подає заяву про визначення обсягу стратегічної екологічної оцінки, шляхом її опублікування на офіційному веб-сайті, на паперових носіях та в газетах, з метою залучення пропозицій та зауважень громадськості. Термін громадського обговорення заяви складає не менше як 15 календарних днів з дня її оприлюднення.</p>
          <p className="text"><CheckCircleIcon fontSize="small"/>Складання Звіту про СЕО<br/>Звіт про СЕО складається до затвердження документа державного планування і містить інформацію, яка враховує зміст та рівень деталізації документа державного планування, сучасні методи оцінки та іншу відповідну інформацію.</p>
          <p className="text"><CheckCircleIcon fontSize="small"/>Проведення громадського обговорення та консультацій, включаючи транскордонні консультації<br/>Повідомлення про оприлюднення проекту документа державного планування та звіту про стратегічну екологічну оцінку розміщується у друкованих засобах масової інформації (не менше як у двох виданнях), визначених замовником, і розміщується на офіційному веб-сайті замовника. Строк громадського обговорення встановлюється замовником і не може становити менше як 30 календарних днів з дня оприлюднення повідомлення.</p>
          <p className="text"><CheckCircleIcon fontSize="small"/>Врахування Звіту про СЕО, результатів громадського обговорення та консультацій<br/>Замовник готує довідку про консультації з громадськістю та органами влади, де вказується врахування або обґрунтоване відхилення пропозицій та зауважень, а також обрання саме цього документа державного планування у вигляді, запропонованого до затвердження, серед інших обґрунтованих альтернатив. До довідки додаються отримані під час громадських обговорень письмові зауваження і пропозиції.</p>
          <p className="text"><CheckCircleIcon fontSize="small"/>Інформування про затвердження документа державного планування<br/>Замовник протягом 5 робочих днів з дня затвердження документа державного планування розміщує на своєму офіційному веб-сайті затверджений документ державного планування, заходи, передбачені для моніторингу наслідків виконання документа, довідку про консультації з громадськістю та органами влади і письмово повідомляє про це орган відповідно до статей 6-8 Закону.</p>
          <p className="text"><CheckCircleIcon fontSize="small"/>Моніторинг наслідків виконання документа державного планування для довкілля, включаючи здоров&#x2019;я населення<br/>Моніторинг проводиться відповідно до Порядку здійснення моніторингу наслідків виконання документа державного планування для довкілля, включаючи здоров&#x2019;я населення, затвердженого постановою КМУ від 16.12.2020 № 1272. Результати моніторингу оприлюднюються на офіційному веб-сайті замовника, і у разі виявлення негативних наслідків для довкілля, включаючи здоров&#x2019;я населення, приймаються заходи для їх усунення.</p>
          <LinkBtn text="До послуг" url="/services"/>
      </section>
    )
  }
  
  export default ServicesSeo