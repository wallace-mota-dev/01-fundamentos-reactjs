import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
import { Coment } from './components/Coment';
import { Post } from './components/Post';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Diego Fernandes'
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
          <Post author='Gabriel Buzzi' content='Um novo post muito legal' />
          <Coment />
        </main>
      </div>
    </>
  );
}
