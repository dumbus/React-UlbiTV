import { useContext } from 'react';
import { Link } from 'react-router-dom';

import MyButton from '../button/MyButton';

import { AuthContext } from '../../../context';

const Navbar = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const logout = () => {
    setAuth(false);
    localStorage.setItem('auth', 'false');
  }

  return (
    <div className='navbar'>
      <div className='navbar__links'>
        <Link className='navbar__link' to='/about'>О сайте</Link>
        <Link className='navbar__link' to='/posts'>Посты</Link>
        <MyButton onClick={logout}>Выйти</MyButton>
      </div>
    </div>
  );
};

export default Navbar;
