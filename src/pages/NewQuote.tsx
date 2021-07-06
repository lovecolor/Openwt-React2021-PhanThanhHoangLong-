import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import quoteApi from '../apis/quoteApi';
import QuoteForm from '../components/quotes/QuoteForm'
import useAxios from '../hooks/use-axios';

export default function NewQuote() {

    const { sendRequest, status } = useAxios(quoteApi.addQuote);
    const history = useHistory();

    useEffect(()=>{
        if (status === 'completed') {
            history.push('/quotes');
          }
    },[status,history])
    
    const addQuoteHandler = (quoteData:any) => {
        sendRequest(quoteData);
      };

    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}>

        </QuoteForm>
    )
}
