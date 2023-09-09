import Bootstrap from "../hoc/Bootstrap";

function Section() {
  return (
    <div className=" h-auto w-full bg-primary py-4 flex items-center flex-col gap-3">
      <h1 className="text-center font-semibold text-3xl text-blue-gray-100">
        Nossos Serviços
      </h1>

      <div className="flex w-full justify-around sm:justify-between sm:flex-row flex-col items-center gap-x-5 pb-4">
        <div className=" bg-blue-gray-100 w-1/2  h-28 "></div>

        <div className="w-1/2">
          <h2 className="text-yellow-600 text-3xl font-semibold">titulo</h2>{" "}
          <p className="text-gray-100 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            excepturi fuga deserunt illo nesciunt, facilis repellat ratione
            omnis veritatis ea dicta quam, sit incidunt nemo, quasi ipsum magni
            sunt. Suscipit.
          </p>
        </div>
      </div>

      <div className="flex w-full justify-around sm:justify-between sm:flex-row flex-col-reverse items-center gap-x-5">
        <div className="w-1/2">
          <h2 className="text-yellow-600 text-3xl font-semibold">titulo</h2>{" "}
          <p className="text-gray-100 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            excepturi fuga deserunt illo nesciunt, facilis repellat ratione
            omnis veritatis ea dicta quam, sit incidunt nemo, quasi ipsum magni
            sunt. Suscipit.
          </p>
        </div>
        <div className=" bg-blue-gray-100 w-1/2  h-28 justify-end"></div>
      </div>
    </div>
  );
}

export default Bootstrap(Section, "#1f1f1f");
