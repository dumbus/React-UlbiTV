import React, { useEffect, useState } from 'react';

import '../styles/App.css';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import MyLoader from '../components/UI/loader/MyLoader';
import Pagination from '../components/UI/pagination/Pagination';

import PostService from '../API/PostService';

import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';

import { getPagesCount } from '../utils/pages';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, loading, error] = useFetching(async () => {
    const response = await PostService.getAllPosts(limit, page);
    setPosts(response.data);

    const totalCount  = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
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
      <Pagination 
        page={page} 
        changePage={changePage} 
        totalPages={totalPages}
      />
    </div>
  );
}

export default Posts;
