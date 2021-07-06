import React, { useRef, useState } from 'react'
import { Prompt } from 'react-router-dom'
import styled from 'styled-components'
import Card from '../UI/Card'
import LoadingSpinner from '../UI/LoadingSpinner '

export default function QuoteForm(props: any) {

    const [isEntering, setIsEntering] = useState(false)

    const authorInputRef: any = useRef();
    const textInputRef: any = useRef();

    function submitFormHandler(event: any) {
        event.preventDefault();

        const enteredAuthor = authorInputRef.current.value;
        const enteredText = textInputRef.current.value;

        // optional: Could validate here

        props.onAddQuote({ author: enteredAuthor, text: enteredText });
    }
    const finishEnteringHandler = () => {
        setIsEntering(false);
    };

    const formFocusedHandler = () => {
        setIsEntering(true);
    };

    return (
        <>
        <Prompt when={isEntering}
        message={(location) =>
          'Are you sure you want to leave? All your entered data will be lost!'
        }></Prompt>
            <Card>
                
                <Form onFocus={formFocusedHandler} onSubmit={submitFormHandler}>
                    {props.isLoading && (
                        <div className="loading">
                            <LoadingSpinner />
                        </div>
                    )}

                    <div className="control">
                        <label htmlFor='author'>Author</label>
                        <input type='text' id='author' ref={authorInputRef} />
                    </div>
                    <div className="control">
                        <label htmlFor='text'>Text</label>
                        <textarea id='text' rows={5} ref={textInputRef}></textarea>
                    </div>
                    <div className="actions">
                        <button onClick={finishEnteringHandler} className='btn'>Add Quote</button>
                    </div>
                </Form>
            </Card>
        </>
    )
}
const Form = styled.form`
position: relative;
.loading {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .control {
      
      
    margin-bottom: 0.5rem;
    & > label {
       
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
    }
    &>input,
 textarea {
  font: inherit;
  padding: 0.35rem;
  border-radius: 4px;
  background-color: #f0f0f0;
  border: 1px solid #c1d1d1;
  display: block;
  width: 98%;
  font-size: 1.25rem;
  &:focus{
background-color: #cbf8f8;
      outline-color: teal;
  }
}
    
  }
  .actions {
    text-align: right;
    &>button {
        font-size: 1.25rem;
        color:white;
        border:none;
        background-color:#327C80;
        padding:.5rem 1rem;
        border-radius:5px;
        cursor:pointer;
      }
  }
  
`