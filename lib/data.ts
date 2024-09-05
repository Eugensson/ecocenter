import {
  MdOutlineFactory,
  MdOutlineSaveAs,
  MdGrading,
  MdContentPasteSearch,
  MdOutlineNoteAlt,
} from "react-icons/md";
import {
  IoNewspaperOutline,
  IoFlaskOutline,
  IoTrashOutline,
} from "react-icons/io5";
import { GoLaw } from "react-icons/go";
import { RxGear } from "react-icons/rx";
import { GiWaterTank } from "react-icons/gi";
import { BiSolidContact } from "react-icons/bi";
import { BsBuildingExclamation } from "react-icons/bs";

export const navLinks = [
  { label: "Про нас", href: "/", icon: BsBuildingExclamation },
  {
    label: "Послуги",
    href: "/services",
    icon: RxGear,
    subLinks: [
      {
        title: "ОВД",
        label: "Оцінка впливів на довкілля",
        href: "/services/ovd",
        icon: MdOutlineSaveAs,
      },
      {
        title: "ОВНС",
        label: "Оцінка впливів на навколишнє середовище",
        href: "/services/ovns",
        icon: MdGrading,
      },
      {
        title: "СЕО",
        label: "Стратегічна екологічна оцінка",
        href: "/services/seo",
        icon: MdContentPasteSearch,
      },
      {
        title: "СЗЗ",
        label: "Обґрунтування встановлення/зменшення санітарно-захисної зони",
        href: "/services/szz",
        icon: MdOutlineNoteAlt,
      },
      {
        title: "Атмосферне повітря",
        label:
          "Інвентаризація джерел викидів, підготовка обгрунтовуючих матеріалів для отримання дозволу на викиди, розробка паспортів ГОУ, допомога в постановці на державний облік",
        href: "/services/air",
        icon: MdOutlineFactory,
      },
      {
        title: "Спецводокористування",
        label:
          "Дозвіл на спеціальне водокористування, проекти нормативів гранично-допустимих скидів, питомі норми водоспоживання та водовідведення, індивідуальні технологічні нормативи використання питної води, паспорти на свердловини, проекти зон санітарної охорони джерел питного та господарсько-побутового водопостачання, складання звітності",
        href: "/services/water",
        icon: GiWaterTank,
      },
      {
        title: "Послуги лаботаорії",
        label:
          "Визначення кількісного та якісного складу забруднюючих речовин у викидах стаціонарних і пересувних джерел, дослідження промислових стічних вод і фізичних параметрів забруднень за допомогою інструментальних, лабораторних і аналітичних методів вимірювання, контрольні виміри, визначення фактичних викидів та оцінка ефективності роботи очисного обладнання.",
        href: "/services/lab",
        icon: IoFlaskOutline,
      },
      {
        title: "Поводження з відходами",
        label:
          "Паспортизація відходів, плани управління відходами, декларація про утворення відходів, інвентаризація відходів, розробка реєстрових карт об’єктів утворення, оброблення та утилізації відходів, паспортизація місць видалення відходів, складання звітності",
        href: "/services/waste",
        icon: IoTrashOutline,
      },
    ],
  },
  { label: "Законодавство", href: "/laws", icon: GoLaw },
  { label: "Новини", href: "/news", icon: IoNewspaperOutline },
  { label: "Контакти", href: "/contact", icon: BiSolidContact },
];
