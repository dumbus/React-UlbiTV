import React, { useState } from 'react';

import './styles/App.css';

import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title:'JavaScript', description: 'JavaScript - Язык программирования'},
    {id: 2, title:'JavaScript 2', description: 'JavaScript - Язык программирования'},
    {id: 3, title:'JavaScript 3', description: 'JavaScript - Язык программирования'},
    {id: 4, title:'JavaScript 4', description: 'JavaScript - Язык программирования'},
    {id: 5, title:'JavaScript 5', description: 'JavaScript - Язык программирования'}
  ]);

  const [posts2, setPosts2] = useState([
    {id: 1, title:'Python', description: 'Python - Язык программирования'},
    {id: 2, title:'Python 2', description: 'Python - Язык программирования'},
    {id: 3, title:'Python 3', description: 'Python - Язык программирования'}
  ]);

  return (
    <div className='App'>
      <PostList posts={posts} title='Посты про JavaScript' />
      <PostList posts={posts2} title='Посты про Python' />
    </div>
  );
}

export default App;
