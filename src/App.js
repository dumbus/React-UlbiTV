import React, { useState } from 'react';

import './styles/App.css';

import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title:'JavaScript', description: 'JavaScript - Язык программирования'},
    {id: 2, title:'JavaScript 2', description: 'JavaScript - Язык программирования'},
    {id: 3, title:'JavaScript 3', description: 'JavaScript - Язык программирования'},
    {id: 4, title:'JavaScript 4', description: 'JavaScript - Язык программирования'},
    {id: 5, title:'JavaScript 5', description: 'JavaScript - Язык программирования'}
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className='App'>
      <PostForm createPost={createPost} />
      {posts.length !== 0
        ? <PostList posts={posts} title='Посты про JavaScript' deletePost={deletePost} />
        : <h1 style={{textAlign: 'center'}}>Посты по теме не найдены</h1>
      }
    </div>
  );
}

export default App;
