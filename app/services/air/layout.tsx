import Link from "next/link";

interface AirLayoutProps {
  children: React.ReactNode;
}

const AirLayout: React.FC<AirLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <ul className="flex items-center gap-10 mx-auto py-10">
        <li>
          <Link href="/services/air/inventory">
            Інвентаризація джерел викидів
          </Link>
        </li>
        <li>
          <Link href="/services/air/supmaterials">Обгрунтовуючі матеріали</Link>
        </li>

        <li>
          <Link href="/services/air/gou">Паспортизація ГОУ</Link>
        </li>
        <li>
          <Link href="/services/air/accounting">Державний облік</Link>
        </li>
      </ul>
      <div className="flex flex-col gap-4 p-1 md:py-2 lg:py-4 xl:py-8">
        {children}
      </div>
    </div>
  );
};

export default AirLayout;
