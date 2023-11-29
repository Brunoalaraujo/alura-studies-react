import { ITarefa } from "../../../types/ITarefas";
import style from "../List.module.scss";

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({
  tarefa,
  tempo,
  selected,
  complete,
  id,
  selecionaTarefa,
}: Props) {
  console.log('item atual: ', {tarefa, tempo, selected, complete, id})
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ""}`}
      onClick={() =>
        selecionaTarefa({
          tarefa,
          tempo,
          selected,
          complete,
          id,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
