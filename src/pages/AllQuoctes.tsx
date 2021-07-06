import React, { useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import quoteApi from '../apis/quoteApi';
import QuoteList from '../components/quotes/QuoteList'
import useAxios from '../hooks/use-axios';
import LoadingSpinner from '../components/UI/LoadingSpinner ';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

export default function AllQuoctes() {
    const [loadedQuotes, setLoadedQuotes] = useState([])
    const { sendRequest, status, data, error } = useAxios(
        quoteApi.getAll,
        true
    );
    useEffect(() => {
        sendRequest()
    }, [sendRequest])
    useEffect(()=>{
        const res: any = []
        for (const key in data) {
            const obj = {
                id: key,
                ...data[key]
            }
            res.push(obj)
        }
        setLoadedQuotes(res)
    },[data])
    if (status === 'pending') {
        return (
            <Spinner className='centered'>
                <LoadingSpinner />
            </Spinner>
        );
    }
    if (error) {
        return <p className='centered focused'>{error}</p>;
    }

    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />;
    }

    return (
        <QuoteList quotes={loadedQuotes}></QuoteList>
    )
}
const Spinner = styled.div`
width:100%;
display:flex;
justify-content: center;

`

