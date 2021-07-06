import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function NoQuotesFound() {
    return (
        <QuotesFound>
            <p>No quotes found!</p>
            <Link className='btn' to='/new-quote'>
                Add a Quote
            </Link>
        </QuotesFound>
    )
}
const QuotesFound = styled.div`
height: 20rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  &>p{
    color: #262c2c;
    font-size: 3rem;
    font-weight: bold;
  }
`
