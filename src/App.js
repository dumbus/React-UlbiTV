import React, { useState } from 'react';

import './styles/App.css';

import PostList from './components/PostList';
import PostForm from './components/PostForm';

import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title:'JavaScript', description: 'JavaScript - Язык программирования 5'},
    {id: 2, title:'JavaScript 2', description: 'JavaScript - Язык программирования 4'},
    {id: 3, title:'JavaScript 3', description: 'JavaScript - Язык программирования 3'},
    {id: 4, title:'JavaScript 4', description: 'JavaScript - Язык программирования 2'},
    {id: 5, title:'JavaScript 5', description: 'JavaScript - Язык программирования 1'}
  ]);
  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className='App'>
      <PostForm createPost={createPost} />
      <hr style={{margin: '15px 0'}} />
      <div>
        <MySelect 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'description', name: 'По описанию'}
          ]}
        />
      </div>
      {posts.length !== 0
        ? <PostList posts={posts} title='Посты про JavaScript' deletePost={deletePost} />
        : <h1 style={{textAlign: 'center'}}>Посты по теме не найдены</h1>
      }
    </div>
  );
}

export default App;
