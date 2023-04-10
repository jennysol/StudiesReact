import {ThumbsUp, Trash} from "phosphor-react";
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/62623621?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Raimundo Afonso Oliveira</strong>
              <time title='04 de Abril ás 06:00h'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'></button>
            <Trash size={20} />
          </header>
          <p>Muito Interessante</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span> 20 </span>
          </button>
        </footer>
      </div>
    </div>
  )
}