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
      <>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre:" name="name" />
          <input type="number" placeholder="Edad:" name="age" />
          <input type="number" placeholder="Kg:" name="kg" />
          <input type="number" placeholder="Factor de actividad:" step="any" name="fDA" />
          <button type="submit">Calcular kcal de mantenimiento</button>
        </form>
      </>
    );
  } else {
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.age}</p>
        <p>{data.value} kg</p>
        <p>{data.kcal} kcal.</p>
        <button onClick={ () => setVisibleForm(true)}>Intentar de nuevo</button>
      </div>
    );
  }
};

export default DataPersonalForm;
