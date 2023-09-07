import { useState } from "react";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";
import { Carousel } from "@material-tailwind/react";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="px-16 bg-[#FFB94B] flex justify-between relative py-4">
        <div className="w-44 h-44 -top-24 bg-gray-900 rounded-full absolute flex items-end justify-center pb-6">
          <img
            src="https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
            alt=""
            className="w-10 h-10"
          />
        </div>

        <div className="hidden sm:flex gap-4 w-full justify-end items-center">
          {headerTexts.map((element) => {
            return (
              <a
                href={element.href}
                className="text-gray-100 hover:text-gray-800 font-normal"
                key={element.name}
              >
                {element.name}
              </a>
            );
          })}
        </div>
        <div className="sm:hidden flex gap-4 w-full justify-end items-center">
          {isOpen ? (
            <BiMenu onClick={() => setIsOpen(!isOpen)} className="text-white" />
          ) : (
            <BiMenuAltRight
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            />
          )}
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`${
          !isOpen ? "block" : "hidden"
        } sm:hidden bg-[#FFB94B] w-20 h-28 flex flex-col absolute right-5 text-end px-2 rounded-b-lg z-10`}
      >
        {headerTexts.map((element) => {
          return (
            <a
              href={element.href}
              className="text-gray-100 hover:text-gray-900"
              key={element.name}
            >
              {element.name}
            </a>
          );
        })}
      </div>

      <Carousel
        autoplayDelay={4000}
        loop={true}
        autoplay={true}
        className="relative"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="https://www.aubicon.com.br/wp-content/uploads/2022/06/4-dicas-de-como-organizar-o-layout-da-sua-academia_blog_1200x800px_100_img2.png"
          alt="image 1"
          className="h-[30rem] w-full object-cover rounded-b-md"
        />
        <img
          src="https://www.lifefitness.com.br/resource/image/1868332/portrait_ratio1x1/600/600/35a80524fd4256ad3ce2f0c48ea29740/iW/hero-image-cardio-consoles.png"
          alt="image 2"
          className="h-[30rem] w-full object-cover rounded-b-md"
        />
        <img
          src="https://sabawellness.com.br/wp-content/uploads/2022/03/AdobeStock_SABA-WELLNESS-ACADEMIA-4-scaled.jpeg"
          alt="image 3"
          className="h-[30rem] w-full object-cover rounded-b-md"
        />
      </Carousel>
      {/* Round div with the image */}
      <div className="w-44 h-44 -top-24 left-16 bg-gray-900 rounded-full absolute flex items-end justify-center pb-6">
        <img
          src="https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
          alt=""
          className="w-10 h-10"
        />
      </div>
    </>
  );
}

export default Header;
