import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Coment.module.css';
import { Avatar } from './Avatar';

export function Coment() {
  return (
    <div className={styles.coment}>
      <Avatar hasBorder={false} src='https://github.com/wallace-mota-dev.png' />
      <div className={styles.comentBox}>
        <div className={styles.comentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Wallace Mota</strong>
              <time title='24 de Março às 09:24' datetime='2025-04-24 09:24:30'>
                Cerca de 2h atrás
              </time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Content</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} weight='bold' />
            Aplaudir
          </button>
        </footer>
      </div>
    </div>
  );
}
