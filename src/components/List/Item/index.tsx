import { ITarefa } from "../../../types/ITarefas";
import style from "./Item.module.scss";

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({
  tarefa,
  tempo,
  selecionado,
  complete,
  id,
  selecionaTarefa,
}: Props) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${
        complete ? style.itemCompletado : ""
      }`}
      onClick={() => !complete &&
        selecionaTarefa({
          tarefa,
          tempo,
          selecionado,
          complete,
          id,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {complete && <span className={style.concluido} aria-label="tarefa completada"></span>}
    </li>
  );
}
