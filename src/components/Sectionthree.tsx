import Bootstrap from "../hoc/Bootstrap";
import OurTeam from "./OurTeam";

function Sectionthree() {
  return (
    <div className="bg-[#FFB94B] h-auto w-full items-center py-4 ">
      <h1 className="text-center items-center font-semibold text-3xl text-gray-900 pb-4">
        Nosso Time
      </h1>
      <div className="flex flex-col justify-evenly gap-y-4 py-4 rounded-3xl lg:flex-row">
      <OurTeam
        img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
        name="Marina Cavalcante"
        socialMedias={[{link:"https://www.instagram.com",icon:"instagramsvg.svg"},{link:"https://www.linkedin.com",icon:"linkedinsvg.svg"},{link:"https://www.whatsapp.com",icon:"whatsappsvg.svg"}]}
        office="Professora de Musculação"
      />
      <OurTeam
        img="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
        name="Roberto Bezerra"
        socialMedias={[{link:"https://www.instagram.com",icon:"instagramsvg.svg"},{link:"https://www.linkedin.com",icon:"linkedinsvg.svg"},{link:"https://www.whatsapp.com",icon:"whatsappsvg.svg"}]}
        office="Coordenador"
      />
      <OurTeam
        img="https://images.unsplash.com/photo-1507081323647-4d250478b919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80"
        name="Thiago Vinicius"
        socialMedias={[{link:"https://www.instagram.com",icon:"instagramsvg.svg"},{link:"https://www.linkedin.com",icon:"linkedinsvg.svg"},{link:"https://www.whatsapp.com",icon:"whatsappsvg.svg"}]}
        office="Professor de Pilates"
      />
      
      </div>

    </div>
  );
}

export default Bootstrap(Sectionthree, "#FFB94B");
