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
  const [post, setPost] = useState({title: '', description: ''});

  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', description: ''});
  };

  return (
    <div className='App'>
      <form>
        <MyInput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type='text' 
          placeholder='Название поста' 
        />
        <MyInput 
          value={post.description}
          onChange={e => setPost({...post, description: e.target.value})}
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
