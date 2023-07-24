import { ITarefa } from "../../../types/ITarefas";
import style from "../List.module.scss"

export default function Item({tarefa, tempo, selected, complete,id}: ITarefa) {
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
