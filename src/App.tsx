import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import Layout from './components/Layout/Layout';
import { Switch, Route, Redirect } from 'react-router';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './app/authSlice';
import { RootState } from './app/store';




function App() {
 
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      dispatch(authActions.login(token))
      
      
    }
    
  }, [])

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage></HomePage>
        </Route>
        {!isLoggedIn && <Route path="/auth">
          <AuthPage></AuthPage>
        </Route>}
        <Route path="/profile">
          {isLoggedIn && <ProfilePage></ProfilePage>}
          {!isLoggedIn && <Redirect to="/auth"></Redirect>}
        </Route>
        <Route path="*">
          <HomePage></HomePage>
        </Route>
      </Switch>
    </Layout>
  );
}
const Container = styled.div``
export default App;
