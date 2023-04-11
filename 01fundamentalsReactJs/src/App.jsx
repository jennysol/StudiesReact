import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3362&q=80',
      name: 'Raimundo Oliveira Afonso',
      role: 'Web Developer Dog'
    },
    content: [
      { type: 'paragraph', content: 'AU AU AU pessoal!'},
      { type: 'paragraph', content: 'Descobri que sou mimado >.<.'},
      { type: 'paragraph', content: '- Mundico.'},
      { type: 'link', content: '#petisco'}
    ],
    publishedAt: new Date('2023-04-09 20:00:00')
  },
  {
    id: 1,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3362&q=80',
      name: 'Cacau Emocionada',
      role: 'Dev front-end'
    },
    content: [
      { type: 'paragraph', content: 'AU dog peoples!'},
      { type: 'paragraph', content: 'Minha humana n me alimenta de forma digna e eu estou com saudade do deus do parcao, vulgo, Raimundo.'},
      { type: 'paragraph', content: '-- Atenciosamente, Cacau Emocionada.'},
      { type: 'link', content: '#petiscoeharte'}
    ],
    publishedAt: new Date('2023-04-09 20:00:00')
  },
];

function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          }) }
        </main>
      </div>
    </div>
  )
}

export default App
