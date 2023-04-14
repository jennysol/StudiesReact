
import styles from './Task.module.css'

export function Task() {
  return (
    <div className="container">
      <header>
        <form className={styles.taskForm}>
          <input type="text" placeholder="Adicione uma nova Tarefa"/>
          <button type='submit'>Criar</button>
        </form>
      </header>
    </div>
  );
}