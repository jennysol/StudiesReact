
import { Header } from './components/Header/Header'
import { TaskList } from './components/TaskList/TaskList';

import './global.css';
import './App.css'
import { useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = "todo.savedTasks";
export interface ITasks {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  function loadSavedTask() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved) {
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTask();
  }, []);

  function setTasksAndSave(newTasks: ITasks[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function addTask(taskTitle: string) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskCompleted(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    });

    setTasksAndSave(newTasks);
  }

  return (
    <div>
     <Header/>
     <main>
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onAddTask={addTask}
        onComplete={toggleTaskCompleted}
      />
     </main>
    </div>
  )
}

export default App
