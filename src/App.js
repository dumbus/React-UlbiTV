import React, { useState } from 'react';

import './styles/App.css';

import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title:'JavaScript', description: 'JavaScript - Язык программирования'},
    {id: 2, title:'JavaScript 2', description: 'JavaScript - Язык программирования'},
    {id: 3, title:'JavaScript 3', description: 'JavaScript - Язык программирования'},
    {id: 4, title:'JavaScript 4', description: 'JavaScript - Язык программирования'},
    {id: 5, title:'JavaScript 5', description: 'JavaScript - Язык программирования'}
  ]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      description
    };

    setPosts([...posts, newPost]);
    
    setTitle('');
    setDescription('');
  };

  return (
    <div className='App'>
      <form>
        <MyInput 
          value={title}
          onChange={e => setTitle(e.target.value)}
          type='text' 
          placeholder='Название поста' 
        />
        <MyInput 
          value={description}
          onChange={e => setDescription(e.target.value)}
          type='text' 
          placeholder='Описание поста' 
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Посты про JavaScript' />
    </div>
  );
}

export default App;
