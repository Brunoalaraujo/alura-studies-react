import React, { useState } from "react";
import Cronometro from "../components/Stopwatch";
import Formulario from "../components/Form";
import Lista from "../components/List";
import style from "./App.module.scss";
import { ITarefa } from "../types/ITarefas";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
