import React, { useState } from 'react';

import './styles/App.css';

// import PostItem from './components/PostItem';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title:'JavaScript', description: 'JavaScript - Язык программирования'},
    {id: 2, title:'JavaScript 2', description: 'JavaScript - Язык программирования'},
    {id: 3, title:'JavaScript 3', description: 'JavaScript - Язык программирования'},
    {id: 4, title:'JavaScript 4', description: 'JavaScript - Язык программирования'},
    {id: 5, title:'JavaScript 5', description: 'JavaScript - Язык программирования'}
  ]);

  return (
    <div className='App'>
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
