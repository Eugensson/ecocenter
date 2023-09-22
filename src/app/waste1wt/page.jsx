import LinkBtn from "@/components/LinkBtn/LinkBtn";

export const metadata = {
  title: '№ 1-BT | ТОВ ЕЦП НВ ПТ',
  description: "Складання звітності за формою № 1-BT",
};

const Waste1wt = () => {
  return (
    <section className="sectionContainer">
        <h1>Звітність за формою № 1-BT</h1>
        <p className="text">Первинний облік відходів та пакувальних матеріалів і тари, згідно з формою № 1-ВТ, здійснюється юридичними особами різних форм власності, видів економічної діяльності та організаційно-правових форм господарювання, а також фізичними особами-підприємцями, що здійснюють діяльність, внаслідок якої виникають відходи та використовуються пакувальні матеріали й тара. Це визначено в наказі Міністерства охорони навколишнього природного середовища України від 07.07.2008 № 342 &quot;Про затвердження типової форми первинної облікової документації № 1-ВТ &quot;Облік відходів та пакувальних матеріалів і тари&quot; та в інструкції щодо її заповнення.</p>
        <p className="text">Кваліфіковані фахівці нашого Центру готові надати Вам консультації та допомогу у правильному заповненні цієї звітної форми.</p>
        <LinkBtn text="До розділу" url="/servicesWaste"/>
    </section>
  )
}

export default Waste1wt