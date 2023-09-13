import { TransitionGroup, CSSTransition } from 'react-transition-group';

import PostItem from './PostItem';

const PostList = ({posts, title, deletePost}) => {

  if (!posts.length) {
    return <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>;
  }

  return (
    <>
      <h1 style={{textAlign: 'center'}}>
        {title}
      </h1>
      <TransitionGroup>
        {posts.map((post, index) => 
          <CSSTransition key={post.id} timeout={500} classNames='post'>
            <PostItem 
              deletePost={deletePost} 
              number={index + 1} 
              post={post} 
            />
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  )
};

export default PostList;
