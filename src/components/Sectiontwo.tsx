import Bootstrap from "../hoc/Bootstrap";
import PricingCard from "./PricingCard";
function Sectiontwo(){
    return(
      
    
    <div className="bg-[#FFB94B] h-auto w-full items-center">
      <h1 className="text-center font-semibold text-3xl text-gray-900 z-50">
        Nossos Planos
      </h1>
      <div className="flex justify-evenly py-6 sm:flex-row flex-col items-center gap-y-8">
        
      <PricingCard
        title="Plano Padrão"
        price="29"
        features={[
          "5 team members",
          "200+ components",
          "40+ built-in pages",
          "1 year free updates",
          "Life time technical support",
        ]}
        buttonText="Comprar Agora"
      />
      <PricingCard
        title="Plano Premium"
        price="49"
        features={[
          "10 team members",
          "300+ components",
          "60+ built-in pages",
          "2 years free updates",
          "Priority technical support",
        ]}
        buttonText="Comprar Agora"
      />

      <PricingCard
        title="Plano Premium Plus"
        price="150"
        features={[
          "20 team members",
          "500+ components",
          "75+ built-in pages",
          "99 years free updates",
          "Priority technical support",
        ]}
        buttonText="Comprar Agora"
      />
    

      </div>
    </div>

    );
}






export default Bootstrap(Sectiontwo, "#FFB94B");