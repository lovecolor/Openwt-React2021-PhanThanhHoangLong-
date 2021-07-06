import React from 'react'
import styled from 'styled-components'
import CommentItem from './CommentItem'

export default function CommentsList(props: any) {
    return (
        <List>
            {props.comments.map((comment: any) => (
                <CommentItem key={comment.id} text={comment.text} />
            ))}
        </List>
    )
}
const List = styled.ul`
list-style: none;
  margin: 2.5rem 0;
  padding: 0;
`