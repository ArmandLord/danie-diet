const Info = () => {
  return (
    <div className="w-full container max-auto mt-10 p-5">
      <h2 className="text-xl text-cyan-600 ">
        ¿Qué son las Calorías de Mantenimiento?
      </h2>
      <br />
      <p className="leading-7 text-justify">
        Es una estimación de la ingesta promedio que, de seguirla en el tiempo,
        te mantendría en tu peso corporal TOTAL actual (recalco lo de peso
        corporal total porque, como ya sabes, ese dato no dice NADA acerca de la
        composición corporal). Tener un valor calórico de mantenimiento de
        referencia, es útil para tener un punto de partida ante un objetivo de
        composición corporal (pérdida de grasa o ganancia de masa muscular).
      </p>
      <br />
      <h3 className="text-cyan-600 text-lg">Consideraciones a tener en cuenta</h3> <br />
      <ul>
        <li>
          🤔  El factor de actividad moderada (es decir para las personas que hacen
          de 2 a 5 veces ejecicio a la semana) en hombres es de 1.5 y mujeres
          1.3
        </li><br />
        <li>🤔  Si deseas aumentar la masa muscular puedes multiplicar el resultante por .10 .15 o 20 </li><br />
        <li>🤔  En el último caso subes más grasa q músculo...</li>
      </ul>
      <br />
      <small className="leading-7 text-justify ">
        El siguiente formulario te ayduara a calcular tus calorías de
        mantenimiento, por favor rellena los campos correctamente.
      </small>
    </div>
  );
};

export default Info;
