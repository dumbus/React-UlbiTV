import PostItem from './PostItem';

const PostList = ({posts}) => {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Список постов</h1>
      {posts.map(post => 
        <PostItem post={post} key={post.id}/>
      )}
    </>
  )
};

export default PostList;
