import React, { useEffect, useState } from 'react';

import './styles/App.css';

import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import MyLoader from './components/UI/loader/MyLoader';

import PostService from './API/PostService';

import { usePosts } from './hooks/usePosts';
import { useFetching } from './hooks/useFetching';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  const [fetchPosts, loading, error] = useFetching(async () => {
    const posts = await PostService.getAllPosts();
    setPosts(posts);
  });

  const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className='App'>
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)} >Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <h1>Добавление нового поста</h1>
        <PostForm createPost={createPost} />
      </MyModal>
      <hr style={{margin: '15px 0'}} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {error && <h1>Произошла ошибка: {error}</h1>}
      {
        loading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><MyLoader /></div>
        : <PostList posts={sortedAndFilteredPosts} title='Посты про JavaScript' deletePost={deletePost} />
      }
    </div>
  );
}

export default App;
