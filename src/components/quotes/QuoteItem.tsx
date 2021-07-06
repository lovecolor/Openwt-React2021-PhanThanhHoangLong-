import React from 'react'
import { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components'



export default function QuoteItem(props: any) {

    return (
        <Item>
            <figure>
                <blockquote>
                    <p>{props.text}</p>
                </blockquote>
                <figcaption>{props.author}</figcaption>
            </figure>

            <Link className='btn' to={`/quotes/${props.id}`}>
                View Fullscreen
            </Link>
        </Item>
    )
}
const Item = styled.li`
margin: 1rem 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: #c2e7f0;
  &:last-of-type {
    border-bottom: none;
  }
  figure {
    margin: 0;
    padding: 0;
    width: 70%;
  }
  blockquote {
    margin: 0;
    text-align: left;
    font-size: 1.5rem;
    color: #212929;
  }
  p {
    margin: 0;
    margin-bottom: 0.25rem;
  }
  figcaption {
    font-style: italic;
    color: #566d6d;
  }
  .btn{
    text-decoration: none;
    color:white;
    background-color:#327C80;
    padding:.5rem 1rem;
    border-radius:5px;
  }
`