import { Routes, Route, Navigate } from 'react-router-dom';

import About from '../pages/About';
import Posts from '../pages/Posts';
import PostId from '../pages/PostId';
import Error from '../pages/Error';

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path='/about' element={<About />} />
      <Route exact path='/posts' element={<Posts />} />
      <Route exact path='/posts/:id' element={<PostId />} />
      <Route exact path='/error' element={<Error />} />
      <Route path='*' element={<Navigate to='/error' replace />} />
    </Routes>
  );
};

export default AppRouter;
