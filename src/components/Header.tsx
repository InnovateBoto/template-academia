const headerTexts = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Serviços",
    href: "#",
  },
  {
    name: "Planos",
    href: "#",
  },
  {
    name: "Contato",
    href: "#",
  },
];

function Header() {
  return (
    <header className="px-16 bg-[#FFB94B] flex justify-between relative py-4">
      <div className="w-44 h-44 -top-24 bg-gray-900 rounded-full absolute flex items-end justify-center pb-6">
        <img
          src="https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
          alt=""
          className="w-10 h-10"
        />
      </div>

      <div className="flex gap-4 w-full justify-end items-center">
        {headerTexts.map((element) => {
          return (
            <a
              href={element.href}
              className="text-gray-100 hover:text-gray-800"
            >
              {element.name}
            </a>
          );
        })}
      </div>
    </header>
  );
}

export default Header;
