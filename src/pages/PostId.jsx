import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useFetching } from '../hooks/useFetching';

import PostService from '../API/PostService';

import MyLoader from '../components/UI/loader/MyLoader';

const PostId = () => {
  const params = useParams();
  const [post, setPost] = useState({});

  const [fetchPostById, loading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);

    setPost(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
  }, []);

  return (
    <>
      <h1>Вы попали на страницу поста с ID = {params.id}</h1>
      {
        loading 
        ? <MyLoader />
        : <div>{post.id}. {post.title}</div>
      }
    </>
  )
};

export default PostId;
