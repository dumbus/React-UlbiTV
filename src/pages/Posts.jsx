import React, { useEffect, useState, useRef } from 'react';

import '../styles/App.css';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import MyLoader from '../components/UI/loader/MyLoader';
import MySelect from '../components/UI/select/MySelect';
import Pagination from '../components/UI/pagination/Pagination';

import PostService from '../API/PostService';

import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import useObserver from '../hooks/useObserver';

import { getPagesCount } from '../utils/pages';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const lastElement = useRef();

  const [fetchPosts, loading, error] = useFetching(async () => {
    const response = await PostService.getAllPosts(limit, page);
    setPosts([...posts, ...response.data]);

    const totalCount  = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query);

  useObserver(lastElement, loading, page < totalPages, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

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
      <MySelect 
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue='Кол-во элементов на странице'
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25'},
          { value: -1, name: 'Показать все'},
        ]}
      />
      {error && <h1>Произошла ошибка: {error}</h1>}
      {
        loading
        && <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><MyLoader /></div>
      }
      <PostList posts={sortedAndFilteredPosts} title='Посты про JavaScript' deletePost={deletePost} />
      <div ref={lastElement} style={{height: '20px', background: 'gray'}} />
      <Pagination 
        page={page} 
        changePage={changePage} 
        totalPages={totalPages}
      />
    </div>
  );
}

export default Posts;
