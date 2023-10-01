import Bootstrap from "../hoc/Bootstrap";

function Section() {
  return (
    <div className="h-auto w-full bg-primary pt-4 flex items-center flex-col gap-3">
      <h1 className="text-center font-semibold text-4xl text-blue-gray-100 py-4">
        Nossos Serviços
      </h1>

      <div className="gap-y-5 flex flex-col">
        <div className="flex w-full justify-around sm:justify-between sm:flex-row flex-col items-center  gap-x-5 pb-4">
          <div className=" bg-blue-gray-100 w-1/2  h-48 md:h-72 justify-end rounded-lg">
            <img
              className="h-full w-full rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>

          <div className="w-1/2">
            <h2 className="text-yellow-600 text-3xl font-semibold">Lorem</h2>{" "}
            <p className="text-gray-100 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur excepturi fuga deserunt illo nesciunt, facilis repellat
              ratione omnis veritatis ea dicta quam, sit incidunt nemo, quasi
              ipsum magni sunt. Suscipit.
            </p>
          </div>
        </div>

        <div className="flex w-full justify-around sm:justify-between sm:flex-row flex-col-reverse items-center gap-x-5">
          <div className="w-1/2">
            <h2 className="text-yellow-600 text-3xl font-semibold">Lorem</h2>{" "}
            <p className="text-gray-100 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur excepturi fuga deserunt illo nesciunt, facilis repellat
              ratione omnis veritatis ea dicta quam, sit incidunt nemo, quasi
              ipsum magni sunt. Suscipit.
            </p>
          </div>
          <div className=" bg-blue-gray-100 w-1/2  h-48 md:h-72 justify-end rounded-lg">
            <img
              className="h-full w-full rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bootstrap(Section, "#1f1f1f");
