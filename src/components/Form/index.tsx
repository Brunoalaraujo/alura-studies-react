import React, {useState} from "react";
import Botao from "../Button";
import style from "./Form.module.scss";

export default function Formulario() {
  const [state, setState] = useState({
    tarefa: "",
    tempo: "00:00"
  })

  const adicionarTarefa = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    console.log('state: ', state)
  }

    return (
      <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            value={state.tarefa}
            onChange={(evento) => setState({...state, tarefa: evento.target.value})}
            id="tarefa"
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={state.tempo}
            onChange={(evento) => setState({ ...state, tempo: evento.target.value})}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao 
        texto="Adiconar"/>
      </form>
    );
  }