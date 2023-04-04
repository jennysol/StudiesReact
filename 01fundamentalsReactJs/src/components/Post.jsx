import styles from './Post.module.css';
import {Comment} from './Comment.jsx';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3388&q=80"/>
          <div className={styles.authorInfo}>
            <strong>Cacau Francisca</strong>
            <span>Back-end Developer</span>
          </div>
        </div>

        <time dateTime='23-02-04'>Publicado há uma hora</time>
      </header>

      <div className={styles.content}>
        <p>AU AU AU pessoal!</p> 
        <p>Minha humana n me alimenta de forma digna e eu estou com saudade do deus do parcao, vulgo, Raimundo.</p> 
        <p>-- Atenciosamente, Cacau Francisca.</p>
        <a href="#">#petisco</a>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Comentar</button>
        </footer>

        <div className={styles.commentList}>
          <Comment/>
          <Comment/>
        </div>
      </form>
    </article>
  );
}