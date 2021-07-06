import React from 'react'
import styled from 'styled-components'

export default function CommentItem(props:any) {
    return (
        <Item>
            <p>{props.text}</p>
        </Item>
    )
}
const Item=styled.li`
margin: 1rem 0;
  color: #4a5555;
  font-size: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid teal;
`