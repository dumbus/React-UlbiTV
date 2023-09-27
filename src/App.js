import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/App.css';

import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/AppRouter';

import { AuthContext } from './context';

function App() {
  const [auth, setAuth] = useState(false);

  return (
      <AuthContext.Provider value={{auth, setAuth}}>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;
