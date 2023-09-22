import Bootstrap from "../hoc/Bootstrap";
import PricingCard from "./PricingCard";
function Sectiontwo(){
    return(
      
    
    <div className="bg-[#FFB94B] h-auto w-full items-center">
      <h1 className="text-center font-semibold text-4xl text-gray-900 pb-8">
        Nossos Planos
      </h1>
      <div className="flex justify-evenly py-6 sm:flex-col lg:flex-row flex-col items-center gap-y-8">
        
      <PricingCard
        title="Plano Básico"
        price="99"
        features={[
          "5 team members",
          "200+ components",
          "40+ built-in pages",
          "1 year free updates",
          "Life time technical support",
        ]}
        buttonText="Assinar Plano"
      />
      <PricingCard
        title="Plano Médio"
        price="109"
        features={[
          "10 team members",
          "300+ components",
          "60+ built-in pages",
          "2 years free updates",
          "Priority technical support",
        ]}
        buttonText="Assinar Plano"
      />

      <PricingCard
        title="Plano Premium Plus"
        price="199"
        features={[
          "20 team members",
          "500+ components",
          "75+ built-in pages",
          "9 years free updates",
          "Priority technical support",
        ]}
        buttonText="Assinar Plano"
      />
    

      </div>
    </div>

    );
}






export default Bootstrap(Sectiontwo, "#FFB94B");