import React, { useRef } from 'react'
import styled from 'styled-components'
import authApi from '../../apis/authApi'
import useAxios from '../../hooks/use-axios'

export default function ProfileForm() {
  const newPasswordInputRef: any = useRef()
  const { sendRequest, status, error, data } = useAxios(authApi.changePass)
  const submitHandler = (e: any) => {
    e.preventDefault()
    const password = newPasswordInputRef.current.value
    const idToken = localStorage.getItem("token")
    sendRequest({
      idToken,
      password,
      returnSecureToken: false

    })
  }

  return (
    <Form onSubmit={submitHandler}>
      <div className="control">
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength={7} ref={newPasswordInputRef} />
      </div>
      {
        error && <p className="fail">{error}</p>

      }
      {
        status === "completed" && !error && <p className="success">Success!</p>
      }
      <div className="action">
        {
          status === "pending" ? <p>Send request...!</p> : <button type="submit">Change Password</button>
        }

      </div>
    </Form>
  )
}
const Form = styled.form`
width: 95%;
  max-width: 25rem;
  margin: 2rem auto;
  .control {
    margin-bottom: 0.5rem;
    label {
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: #353336;
        display: block;
      }
      input {
        display: block;
        font: inherit;
        width: 100%;
        border-radius: 4px;
        border: 1px solid #38015c;
        padding: 0.25rem;
        background-color: #f7f0fa;
      }
  }
  .action {
    margin-top: 1.5rem;
    button {
        font: inherit;
        cursor: pointer;
        padding: 0.5rem 1.5rem;
        border-radius: 4px;
        background-color: #38015c;
        color: white;
        border: 1px solid #38015c;
        &:hover {
            background-color: #540d83;
            border-color: #540d83;
          }
      }
      
  }
  .fail{
    color:red;
  }
  .success{
    color:green;
  }
  
  
`
