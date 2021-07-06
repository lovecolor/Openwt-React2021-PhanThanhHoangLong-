import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import commentApi from '../../apis/commentApi';
import useAxios from '../../hooks/use-axios';
import LoadingSpinner from '../UI/LoadingSpinner ';

export default function NewCommentForm(props: any) {
    const commentTextRef: any = useRef()
    const { onAddedComment } = props;

    const { sendRequest, status, error } = useAxios(commentApi.add)
    const submitFormHandler = (event: any) => {
        event.preventDefault();

        const enteredText = commentTextRef.current.value;

        // optional: Could validate here

        sendRequest({ commentData: { text: enteredText }, id: props.quoteId });
    };
    useEffect(()=>{
        if (status === 'completed' && !error) {
            onAddedComment();
          }
    },[status,error,onAddedComment])
    return (
        <Form onSubmit={submitFormHandler}>
            {status === 'pending' && (
                <div className='centered'>
                    <LoadingSpinner />
                </div>
            )}
            <div className="control" onSubmit={submitFormHandler}>
                <label htmlFor='comment'>Your Comment</label>
                <textarea id='comment' rows={5} ref={commentTextRef}></textarea>
            </div>
            <div className="actions">
                <button className='btn'>Add Comment</button>
            </div>
        </Form>
    )
}
const Form = styled.form`
margin-top: 1rem;
  position: relative;
  text-align: center;
  .loading {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    
  }.control {
    margin-bottom: 0.5rem;
    & > label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
    }
    & > textarea {
      font: inherit;
      padding: 0.35rem;
      border-radius: 4px;
      background-color: #f0f0f0;
      border: 1px solid #c1d1d1;
      display: block;
      width: 100%;
      font-size: 1.25rem;
      &:focus {
        background-color: #cbf8f8;
        outline-color: teal;
      }
    }
  }
  .actions{
    &>button{
        color:white;
        background-color:#327C80;
        padding:.5rem 1rem;
        border-radius:5px;
        border:none;
      font-size: 1.25rem;
    }
  }
`