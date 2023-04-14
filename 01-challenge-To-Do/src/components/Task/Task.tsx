import { Trash, CheckCircle } from "phosphor-react";
import { ITasks } from "../../App";

import styles from './Task.module.css'

export interface TaskProps {
  task: ITasks;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: TaskProps) {

  return (
    <li className={styles.task} >
      <button 
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
        >
        { task.isCompleted ? <CheckCircle color="#8284FA" size={22} /> : <div id="radio-input"/>}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>

      <button 
        type='submit' 
        className={styles.deleteButton}
        onClick={() => onDelete(task.id)}
      >
        <Trash size={20} />
      </button>
    </li>
  );
}