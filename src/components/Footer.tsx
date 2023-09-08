import Bootstrap from "../hoc/Bootstrap";
import { BsInstagram, BsTelephone, BsWhatsapp } from "react-icons/bs";

const contactList = [
  {
    icon: <BsWhatsapp />,
    description: "+99 99999-9999",
  },
  {
    icon: <BsInstagram />,
    description: "@Academia",
  },
  {
    icon: <BsTelephone />,
    description: "+99 99999-9999",
  },
];

function Footer() {
  return (
    <footer className="bg-[#1f1f1f] flex w-full h-72 text-center">
      <h2 className="pt-2 text-white font-semibold text-2xl">
        Fale com a gente.
      </h2>
      <div className="flex justify-center items-start w-1/2 flex-col">
        {contactList.map((e) => (
          <div className="flex text-white gap-2  items-center">
            {e.icon} <p>{e.description}</p>
          </div>
        ))}
      </div>
      <div className="w-1/2 lg:w-1/3 h-full py-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
          className="h-full w-full border-none rounded-lg"
          allowFullScreen={false}
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    </footer>
  );
}

export default Bootstrap(Footer, "#1f1f1f");
