import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Coment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(state => {
      return state + 1;
    });
  }

  return (
    <div className={styles.coment}>
      <Avatar
        hasBorder={false}
        src='https://github.com/wallace-mota-dev.png'
        alt=''
      />
      <div className={styles.comentBox}>
        <div className={styles.comentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Wallace Mota</strong>
              <time title='24 de Março às 09:24' dateTime='2025-04-24 09:24:30'>
                Cerca de 2h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} weight='bold' />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
