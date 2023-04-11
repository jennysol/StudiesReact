import {ThumbsUp, Trash} from "phosphor-react";
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment({content}) {
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

            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            <span>Aplaudir</span> <span> 20 </span>
          </button>
        </footer>
      </div>
    </div>
  )
}