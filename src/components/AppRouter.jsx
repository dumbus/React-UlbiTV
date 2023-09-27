import { Routes, Route, Navigate } from 'react-router-dom';

import { publicRoutes, privateRoutes } from '../router';

const AppRouter = () => {
  const isAuth = true;

  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map((route) => 
          <Route 
            path={route.path} 
            element={<route.element />} 
            exact={route.exact}
          />
        )}
        <Route path='*' element={<Navigate to='/error' replace />} />
      </Routes>
      :
      <Routes>
        {publicRoutes.map((route) => 
          <Route 
            path={route.path} 
            element={<route.element />} 
            exact={route.exact}
          />
        )}
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
  );
};

export default AppRouter;
