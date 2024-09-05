import Link from "next/link";

interface WasteLayoutProps {
  children: React.ReactNode;
}

const WasteLayout: React.FC<WasteLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 mx-auto py-10">
        <li className="flex justify-center items-center">
          <Link href="/services/waste/certification">
            Паспортизація відходів
          </Link>
        </li>
        <li className="flex justify-center items-center">
          <Link href="/services/waste/management">
            План управління відходами
          </Link>
        </li>
        <li className="flex justify-center items-center">
          <Link href="/services/waste/declaration" className="text-center">
            Декларація про утворення відходів
          </Link>
        </li>
        <li className="flex justify-center items-center">
          <Link href="/services/waste/inventory">Інвентаризація відходів</Link>
        </li>
        <li className="flex justify-center items-center">
          <Link href="/services/waste/cards">Реєстрові карти</Link>
        </li>
        <li className="flex justify-center items-center">
          <Link href="/services/waste/mvv">Паспортизація МВВ</Link>
        </li>
        <li className="flex justify-center items-center">
          <Link href="/services/waste/zvit">Статистична звітність</Link>
        </li>
      </ul>
      <div className="flex flex-col gap-4 p-1 md:py-2 lg:py-4 xl:py-8">
        {children}
      </div>
    </div>
  );
};

export default WasteLayout;
