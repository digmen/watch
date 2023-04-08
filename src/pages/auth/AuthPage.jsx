import React from 'react';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Checkbox } from '@mui/material';
import './auth.css';
import { useAuthContext } from '../../contexts/AuthContext';

function Copyright(props) {
  return (
    <div className="copyright" align="center" {...props}>
      {'Copyright © '}
      <Link style={{ color: 'black' }} to="/">
        Chronos
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </div>
  );
}

function AuthPage() {
  const { user, register, login } = useAuthContext;

  const [showPass, setShowPass] = useState(false);

  const [isLogin, setLogin] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const credentials = {
      email: data.get('email'),
      password: data.get('password'),
      displayName: data.get('displayName'),
      photoURL: data.get('photoURL'),
    };
    if (isLogin) {
      login(credentials);
    } else {
      register(credentials);
    }
  };

  //   if (user) {
  //     return <Navigate replace to="/" />;
  //   }

  return (
    <section className="login">
      <div>
        <div>
          <div className="sign"> {isLogin ? 'Sign in' : 'Sign up'}</div>
          <form onSubmit={handleSubmit}>
            {!isLogin ? (
              <div className="render-input">
                <input
                  className="signinp"
                  id="name"
                  placeholder="Name"
                  name="displayName"
                />
                <input
                  className="signinp"
                  id="photo"
                  placeholder="Avatar"
                  name="photoURL"
                />
              </div>
            ) : null}

            <input
              className="signinp"
              id="email"
              placeholder="Email Address"
              name="email"
              autoComplete="email"
            />
            <input
              className="signinp"
              name="password"
              placeholder="Password"
              type={showPass ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
            />

            {/* <form
              control={
                <input
                  type="checkbox"
                  checked={showPass}
                  onChange={(e) => setShowPass(e.target.checked)}
                ></input>
              }
              placeholder="Show password"
            /> */}

            <button className="btn-sign">
              {isLogin ? 'Sign in' : 'Sign up'}
            </button>
            <div className="acc">
              <div>
                {isLogin ? (
                  <Link className="acc-pass">Forgot password?</Link>
                ) : null}
              </div>
              <div>
                <Link className="acc-pass" onClick={() => setLogin(!isLogin)}>
                  {isLogin
                    ? "Don't have an account? Sign Up"
                    : 'Already have an account? Sign in'}
                </Link>
              </div>
            </div>
          </form>
        </div>
        <Copyright />
      </div>
    </section>
  );
}

export default AuthPage;
