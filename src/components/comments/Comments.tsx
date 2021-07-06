import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import commentApi from '../../apis/commentApi';
import useAxios from '../../hooks/use-axios';
import NewCommentForm from './NewCommentForm ';
import CommentsList from './CommentsList ';
import LoadingSpinner from '../UI/LoadingSpinner ';
import { useCallback } from 'react';

export default function Comments() {
    const [isAddingComment, setIsAddingComment] = useState(false)
    const [loadedComments, setLoadedComments] = useState([])

    const { sendRequest, status, data } = useAxios(commentApi.getAllById)
    const params: any = useParams()
    const { quoteId } = params
    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };
    const addedCommentHandler = useCallback(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);
    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId])
    useEffect(() => {
        if(data)
        {
            const res: any = []
            for (const key in data) {
                const obj = {
                    id: key,
                    ...data[key]
                }
                if(obj.text)
                res.push(obj)
            }
            setLoadedComments(res)
        }
        
    }, [data])
    let comments;
    if (status === 'pending') {
        comments = (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        );
    }
    if (status === 'completed' && loadedComments && loadedComments.length > 0) {
        comments = <CommentsList comments={loadedComments} />;
    }
    if (
        status === 'completed' &&
        loadedComments.length === 0
    ) {
        comments = <p className='centered'>No comments were added yet!</p>;
    }
    
    return (
        <Comment>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className='btn' onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment && <NewCommentForm onAddedComment={addedCommentHandler} quoteId={quoteId}></NewCommentForm>}
            {
                comments
            }
        </Comment>
    )
}
const Comment = styled.div`
text-align: center;
&>button {
    font-size: 1.25rem;
    border:none;
    border-radius:5px;
    background-color:#327C80;
    color:white;
    padding:.5rem 1rem;
    cursor:pointer;
  }
`
