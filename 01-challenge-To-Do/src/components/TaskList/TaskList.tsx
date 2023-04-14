
import { ChangeEvent, FormEvent, useState } from 'react';
import { Notebook } from "phosphor-react";
import { ITasks } from '../../App';
import { Task } from '../Task/Task';

import styles from './TaskList.module.css'

export interface TaskProps {
  tasks: ITasks[];
  onAddTask: (taskTitle: string) => void;
  onDeleteTask: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function TaskList({ tasks, onAddTask, onDeleteTask, onComplete }: TaskProps) {
  const taskLength = tasks.length;
  const completedTask = tasks.filter((task) => task.isCompleted).length;
  const [taskTitle, setTaskTitle] = useState('');

  function handleAddTask(event: FormEvent) {
    event.preventDefault();

    onAddTask(taskTitle);
    setTaskTitle('');
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value);
  }

  return (
    <div className="container">
      <header>
        <form className={styles.taskForm} onSubmit={handleAddTask}>
          <input 
            type="text" 
            placeholder="Adicione uma nova Tarefa" 
            onChange={onChangeTitle} 
            value={taskTitle}
          />
          <button type='submit'>Criar</button>
        </form>
      </header>

      <section className={styles.tasks}>
        <div className={styles.taskInfos}>
          <div>
            <p>Tarefas criadas</p>
            <span>{ taskLength }</span>
          </div>

          <div>
            <p className={styles.textPurple}>Concluídas</p>
            <span>
              {completedTask} de {taskLength}
            </span>
          </div>
        </div>
       

        <div className={styles.list}>
          {tasks.map((task) => (
            <Task 
              key={task.id} 
              task={task}
              onDelete={onDeleteTask}
              onComplete={onComplete}
            />
          ))}

          {tasks.length == 0 && (
            <section className={styles.empty}>
              <Notebook size="50"/>
              <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </section>
          )}
        </div>
      </section>
    </div>
  );
}