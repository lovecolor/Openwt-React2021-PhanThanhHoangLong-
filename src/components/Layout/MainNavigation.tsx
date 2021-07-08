import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { authActions } from '../../app/authSlice'
let logoutTimer: any;
const calculateRemainingTime = (expirationTime: any) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingDuration = adjExpirationTime - currentTime;

    return remainingDuration;
};
const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if (remainingTime <= 3600) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }
    return {
        token: storedToken,
        duration: remainingTime,
    };
};

export default function MainNavigation() {
    const dispatch = useDispatch()
    const history = useHistory()

    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
    const tokenData = retrieveStoredToken();


    useEffect(() => {
        if (isLoggedIn) {
            const expirationTime = localStorage.getItem("expirationTime")
            const remainingTime = calculateRemainingTime(expirationTime);
            logoutTimer = setTimeout(() => {
                dispatch(authActions.logout(""))
            }, remainingTime)

        }
    }, [isLoggedIn])

    useEffect(() => {
        const expirationTime = localStorage.getItem("expirationTime")
        if (expirationTime) {
            const remainingTime = calculateRemainingTime(expirationTime);
            logoutTimer = setTimeout(() => {
                dispatch(authActions.logout(""))
            }, remainingTime);
        }
        return () => {
            if (logoutTimer) clearTimeout(logoutTimer)
        }
    }, [])
    const logoutHandler = () => {
        dispatch(authActions.logout(""))
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
        history.replace('/auth')
    }
    useEffect(() => {
        if (tokenData) {
            console.log(tokenData.duration);
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    }, [tokenData, logoutHandler]);
    return (
        <Header>
            <Link to='/'>
                <div className="logo">React Auth</div>
            </Link>
            <nav>
                <ul>
                    {!isLoggedIn && (
                        <li>
                            <Link to='/auth'>Login</Link>
                        </li>
                    )}
                    {isLoggedIn && (
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                    )}
                    {isLoggedIn && (
                        <li>
                            <button onClick={logoutHandler} >Logout</button>
                        </li>
                    )}
                </ul>
            </nav>
        </Header>
    )
}
const Header = styled.header`

  height: 5rem;
  background-color: #38015c;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  .logo {
    font-family: "Lato", sans-serif;
    font-size: 2rem;
    color: white;
    margin: 0;
  }
  nav{
    & > ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: baseline;
        & > li {
          margin: 0 1rem;
        }
      }
  }
  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    &:hover {
      color: #c291e2;
    }
  }
   button {
    font: inherit;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    font-weight: bold;
    padding: 0.5rem 1.5rem;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      background-color: #c291e2;
      color: #38015c;
    }
`