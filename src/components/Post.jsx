import { Avatar } from './Avatar';
import styles from './Post.module.css';

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/wallace-mota-dev.png' />
          <div className={styles.authorInfo}>
            <strong>{props.name}</strong>
            <span>{props.role}</span>
          </div>
        </div>

        <time>Públicado</time>
      </header>

      <div className={styles.content}></div>

      <form onSubmit={''} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          placeholder='Escreva um comentário...'
          required
        />

        <footer>
          <button type='submit' disabled={''}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {/* {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })} */}
      </div>
    </article>
  );
}
