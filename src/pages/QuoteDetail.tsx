import React, { useEffect } from 'react'
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import quoteApi from '../apis/quoteApi'
import useAxios from '../hooks/use-axios'
import LoadingSpinner from '../components/UI/LoadingSpinner '
import HighlightedQuote from '../components/quotes/HighlightedQuote '
import Comments from '../components/comments/Comments'

export default function QuoteDetail() {

    const match = useRouteMatch()
    const params: any = useParams()

    const { quoteId } = params

    const { sendRequest, status, data: loadedQuote, error } = useAxios(quoteApi.getById, true)

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId])
    if (status === 'pending') {
        return (
            <Spinner className='centered'>
                <LoadingSpinner />
            </Spinner>
        );
    }
    if (error) {
        return <p className='centered'>{error}</p>;
    }

    if (!loadedQuote.text) {
        return <p>No quote found!</p>;
    }

    return (
        <>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}></HighlightedQuote>
            <Route path={match.path} exact>
                <LoadComment>
                    <Link className='btn--flat' to={`${match.url}/comments`}>
                    Load Comments
                    </Link>
                </LoadComment>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </>
    )
}
const Spinner = styled.div`
width:100%;
height:100%;
display:flex;
justify-content: center;
  align-items: center;
`
const LoadComment=styled.div`
// width:100%;
// height:5rem;
text-align:center;
.btn--flat{
    text-decoration: none;
    color:#327C80;
    font-weight:bold;
    &:hover{
        color:white;
        background-color:#327C80;
        border-radius:5px;
        padding:.5rem 1rem;
    }
}
`