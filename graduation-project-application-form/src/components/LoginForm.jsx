/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginSchema from '../schema/LoginSchema';
import { LoginContext } from '../Context/LoginContext';

import '../styles/loginform.scss';
import '../styles/button.scss';

const LoginForm = () => {
  const [docError, showDocError] = useState(false);

  const { login } = useContext(LoginContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data) => {
    if (login(data)) {
      history.replace({ pathname: '/admin' });
    } else {
      showDocError(true);
    }
  };
  return (
    <div className="login ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
          <h3>Lütfen Giriş Yapınız...</h3>
          <div>
            <input
              data-testid="input-username"
              placeholder="Kullanı Adınız"
              type="text"
              {...register('username')}
            />
            <p>{errors.username?.message}</p>
          </div>
          <div>
            <input
              data-testid="input-password"
              placeholder="Şifreniz"
              type="password"
              {...register('password')}
            />
            <p>{errors.password?.message}</p>
          </div>
          {docError && (
            <span className="error-msg" data-testid="errormsg">
              Böyle Bir kullanıcı bulunamadı
            </span>
          )}
          <button data-testid="login-button" className="login-button" type="submit">
            Giriş Yap
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
