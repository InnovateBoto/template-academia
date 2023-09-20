import Bootstrap from "../hoc/Bootstrap";

function Sectionthree() {
  return (
    <div className="bg-[#FFB94B] h-auto w-full items-center py-4">
      <h1 className="text-center font-semibold text-3xl text-gray-900">
        Nosso Time
      </h1>
      <div className="flex justify-evenly py-6 sm:flex-row flex-col items-center gap-y-8">
        <div className="p-20 py-24 bg-gray-700 rounded-lg"></div>
        <div className="p-20 py-24 bg-gray-800 rounded-lg"></div>
        <div className="p-20 py-24 bg-gray-900 rounded-lg"></div>
      </div>
    </div>
  );
}

export default Bootstrap(Sectionthree, "#FFB94B");
