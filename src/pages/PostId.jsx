import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useFetching } from '../hooks/useFetching';

import PostService from '../API/PostService';

import MyLoader from '../components/UI/loader/MyLoader';

const PostId = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, loading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);

    setPost(response.data);
  });

  const [fetchComments, commentsLoading, commentsError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);

    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <>
      <h1>Вы попали на страницу поста с ID = {params.id}</h1>
      {
        loading 
        ? <MyLoader />
        : <div>{post.id}. {post.title}</div>
      }
      <h2>Комментарии</h2>
      {
        commentsLoading 
        ? <MyLoader />
        : <div>
          {comments.map(comment => 
            <div style={{marginTop: '15px'}}>
              <h5>{comment.email}</h5>
              <div>{comment.body}</div>
            </div>
          )}
        </div>
      }
    </>
  )
};

export default PostId;
