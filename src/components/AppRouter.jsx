import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { publicRoutes, privateRoutes } from '../router';

import { AuthContext } from '../context';

const AppRouter = () => {
  const { auth } = useContext(AuthContext);

  return (
    auth
      ?
      <Routes>
        {privateRoutes.map((route) => 
          <Route 
            key={route.path}
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
            key={route.path}
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
