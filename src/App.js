import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/App.css';

import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/AppRouter';

import { AuthContext } from './context';

function App() {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth') === 'true') {
      setAuth(true);
    }

    setLoading(false);
  }, []);

  return (
      <AuthContext.Provider value={{auth, setAuth, loading}}>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;
