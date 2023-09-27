import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';

import { AuthContext } from '../context';

const Login = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = event => {
    event.preventDefault();

    setAuth(true);
    navigate('/posts');
  };

  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput type='text' placeholder='Введите логин' />
        <MyInput type='password' placeholder='Введите пароль' />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
};

export default Login;
