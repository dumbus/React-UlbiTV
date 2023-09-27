import About from '../pages/About';
import Posts from '../pages/Posts';
import PostId from '../pages/PostId';
import Login from '../pages/Login';
import Error from '../pages/Error';

export const privateRoutes = [
  {path: '/', element: Posts, exact: true},
  {path: '/about', element: About, exact: true},
  {path: '/posts', element: Posts, exact: true},
  {path: '/posts/:id', element: PostId, exact: true},
  {path: '/error', element: Error, exact: true}
];

export const publicRoutes = [
  {path: '/login', element: Login, exact: true}
];
