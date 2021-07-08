import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import authApi from '../../apis/authApi';
import { authActions } from '../../app/authSlice';
import useAxios from '../../hooks/use-axios';

export default function AuthForm() {
    const dispatch = useDispatch()
    const history = useHistory()

    const emailInputRef: any = useRef();
    const passwordInputRef: any = useRef()

    const [isLogin, setIsLogin] = useState(true)
    const [isLoading, setIsLoading] = useState(false)



    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };
    const { sendRequest, status, error, data } = useAxios(isLogin ? authApi.logIn : authApi.signUp)

    const submitHandler = (event: any) => {
        event.preventDefault();
        const email = emailInputRef.current.value
        const password = passwordInputRef.current.value


        sendRequest(
            {
                email,
                password,
                returnSecureToken: true

            }
        )
    }

    useEffect(() => {
        setIsLoading(status === "pending")
    }, [status])
    useEffect(() => {

        if (data && data.idToken) {
            const expirationTime = new Date(
                new Date().getTime() + +data.expiresIn * 1000
            );
            localStorage.setItem("expirationTime", expirationTime.toISOString())
            dispatch(authActions.login(data.idToken))
        }
    }, [data])
    return (
        <Form>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submitHandler}>
                <div className="control">
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={emailInputRef} />
                </div>
                <div className="control">
                    <label htmlFor='password'>Your Password</label>
                    <input
                        type='password'
                        id='password'
                        required
                        ref={passwordInputRef}
                    />
                </div>
                {error && <p>{error}</p>}
                <div className="actions">
                    {!isLoading && (
                        <button>{isLogin ? 'Login' : 'Create Account'}</button>
                    )}
                    {isLoading && <p>Sending request...</p>}
                    <button
                        type='button'
                        className="toggle"
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </Form>
    )
}
const Form = styled.div`
margin: 3rem auto;
  width: 95%;
  max-width: 25rem;
  border-radius: 6px;
  background-color: #38015c;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  text-align: center;
  color: white;
  &>h1 {
    text-align: center;
    color: white;
  }
  p{color:red}
  .control {
    margin-bottom: 0.5rem;
    label {
        display: block;
        color: white;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      input {
        font: inherit;
        background-color: #f1e1fc;
        color: #38015c;
        border-radius: 4px;
        border: 1px solid white;
        width: 100%;
        text-align: left;
        padding: 0.25rem;
      }
  }
  .actions {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        cursor: pointer;
        font: inherit;
        color: white;
        background-color: #9f5ccc;
        border: 1px solid #9f5ccc;
        border-radius: 4px;
        padding: 0.5rem 2.5rem;
        &:hover {
            background-color: #873abb;
            border-color: #873abb;
          }
      }
      .toggle {
        margin-top: 1rem;
        background-color: transparent;
        color: #9f5ccc;
        border: none;
        padding: 0.15rem 1.5rem;
        &:hover {
            background-color: transparent;
            color: #ae82cc;
          }
      }
  }
  
`