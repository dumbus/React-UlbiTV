import { useState } from 'react';

import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({ createPost }) => {
  const [post, setPost] = useState({title: '', description: ''});

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now()
    }

    createPost(newPost);
    setPost({title: '', description: ''});
  };

  return (
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
  )
};

export default PostForm;
