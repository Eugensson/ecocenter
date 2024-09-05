import Link from "next/link";

interface WaterLayoutProps {
  children: React.ReactNode;
}

const WaterLayout: React.FC<WaterLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 mx-auto py-10">
        <li className="flex justify-center items-center">
          <Link href="/services/water/permission">Спецводокористування</Link>
        </li>
        <li className="flex justify-center items-center">
          <Link href="/services/water/gds">Проекти нормативів ГДС</Link>
        </li>
        <li className="flex justify-center items-center">
          <Link href="/services/water/normy" className="text-center">
            Норми водоспоживання/водовідведення
          </Link>
        </li>
        <li className="flex justify-center items-center">
          <Link href="/services/water/drill">Свердловини</Link>
        </li>
        <li className="flex justify-center items-center">
          <Link href="/services/water/zso">Зони санітарної охорони</Link>
        </li>
        <li className="flex justify-center items-center">
          <Link href="/services/water/zvit">Статистична звітність</Link>
        </li>
      </ul>
      <div className="flex flex-col gap-4 p-1 md:py-2 lg:py-4 xl:py-8">
        {children}
      </div>
    </div>
  );
};

export default WaterLayout;
