import React from 'react'
import styled from 'styled-components'

export default function HighlightedQuote (props:any) {
    return (
        <Quote>
            <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
        </Quote>
    )
}
const Quote=styled.figure`
background-color: #162b2b;
  color: white;
  border-radius: 6px;
  padding: 3rem;
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
  &>p{
    font-size: 2.5rem;
  }
  &>figcaption {
    font-style: italic;
    font-size: 1.5rem;
    text-align: right;
    color: #a1e0e0;
  }
`