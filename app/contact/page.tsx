import Link from "next/link";
import { SiViber, SiWhatsapp } from "react-icons/si";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { CiMobile4, CiMail, CiLocationOn } from "react-icons/ci";

import { Map } from "@/components/map";
import { ContactForm } from "@/components/contact-form";

const Contact = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full h-full p-1 md:py-2 lg:py-4 xl:py-8">
      <li className="flex flex-col justify-center gap-4 rounded-md bg-primary-foreground p-2 md:p-4 lg:p-8">
        <span className="flex items-center gap-4">
          <CiLocationOn size={30} />
          м. Черкаси, вул. Святотроїцька, 102/1, офіс: 3, 5
        </span>
        <Link
          href="tel:+380472361014"
          className="flex items-center gap-4 hover:underline"
        >
          <TbDeviceLandlinePhone size={30} />
          +38 047 236 10 14
        </Link>
        <Link
          href="tel:+380673956256"
          className="flex items-center gap-4 hover:underline"
        >
          <CiMobile4 size={30} />
          +38 067 395 62 56
        </Link>
        <Link
          href="viber://chat?number=+380673956256"
          aria-label="Viber"
          className="flex items-center gap-4 hover:underline"
        >
          <SiViber size={30} className="text-blue-600" />
          +38 067 395 62 56
        </Link>
        <Link
          href="whatsapp://send?phone=+380673956256"
          aria-label="WhatsApp"
          className="flex items-center gap-4 hover:underline"
        >
          <SiWhatsapp size={30} className="text-green-600" />
          +38 067 395 62 56
        </Link>
        <Link
          href="mailto:ncpnv21@ukr.net"
          className="flex items-center gap-4 hover:underline"
        >
          <CiMail size={30} />
          ncpnv21@ukr.net
        </Link>
      </li>
      <li className="rounded-md bg-primary-foreground p-2 md:p-4 lg:p-8">
        <ContactForm />
      </li>
      <li className="rounded-md md:col-span-2 bg-primary-foreground overflow-hidden h-[150px] md:h-[300px] lg:h-[500px]">
        <Map />
      </li>
    </ul>
  );
};

export default Contact;
