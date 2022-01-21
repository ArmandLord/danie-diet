import { useState } from "react";

const DataPersonalForm = () => {
  const [data, setData] = useState({
    name: "",
    age: 0,
    value: 0,
    fDA: 0,
  });

  const [visibleForm, setVisibleForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const n = e.target[0].value;
    const a = e.target[1].value;
    const k = e.target[2].value;
    const f = e.target[3].value;
    const kcalTotal = 22 * k * f;

    setData({
      ...data,
      name: n,
      age: a,
      value: k,
      fDA: f,
      kcal: kcalTotal,
    });
    setVisibleForm(false);
  };

  if (visibleForm) {
    return (
      <div className="w-full container max-auto mt-4">
        <form
          className="bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-cyan-900 text-xs font-bold mb-2"
                // for="grid-first-name"
              >
                Nombre:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Nombre:"
                name="name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-cyan-900 text-xs font-bold mb-2"
                // for="grid-last-name"
              >
                Edad:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                placeholder="Edad:"
                name="age"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-cyan-900 text-xs font-bold mb-2"
                // for="grid-last-name"
              >
                Kg:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                placeholder="Kg:"
                name="kg"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-cyan-900 text-xs font-bold mb-2"
                // for="grid-last-name"
              >
                Factor de actividad:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                placeholder="Factor de actividad:"
                step="any"
                name="fDA"
              />
            </div>
          </div>
          <div className="container flex justify-center ">
            <button
              className="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Calcular
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="w-full container max-auto mt-4">
        <div className="bg-cyan-50  shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-lg">¡Hola <b>{data.name}</b>, que gusto saber de ti! 🤗</h1>
          <br />
          <p>
            De acuerdo con los datos obtenidos, como tu <b>edad:</b> {data.age} años,
            tu <b>peso corporal</b> en kg: {data.value}kg. y tu{" "}
            <b>factor de actividad:</b> {data.fDA}.
          </p>

          <p>Tus calorías de mantenimiento son {data.kcal} kcal. </p>

          <br />
          <button className="btn" onClick={() => setVisibleForm(true)}>
            Intentar de nuevo
          </button>
        </div>
      </div>
    );
  }
};

export default DataPersonalForm;
