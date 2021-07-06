import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import QuoteItem from './QuoteItem';

const sortQuotes = (quotes: any, ascending: boolean) => {
    return quotes
    .sort((quoteA: any, quoteB: any) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1;
        } else {
            return quoteA.id < quoteB.id ? 1 : -1;
        }
    });
};
export default function QuoteList(props: any) {
    const history = useHistory()
    const location = useLocation()

    const queryParams = new URLSearchParams(location.search)

    const isSortingAscending = queryParams.get('sort') === 'asc';
    const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);
    const changeSortingHandler = () => {
        history.push({
            pathname: location.pathname,
            search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
        });
    };
    return (
        <List>
            <div className="sorting">
                <button onClick={changeSortingHandler}>
                    Sort {isSortingAscending ? 'Descending' : 'Ascending'}
                </button>
            </div>
            <ul className="list">
                {sortedQuotes.map((quote: any) => (
                    <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author={quote.author}
                        text={quote.text}
                    />
                ))}
            </ul>
        </List>
    )
}
const List = styled.div`
widht:100%;
.list{
    list-style: none;
  margin: 0;
  padding: 0;
}
.sorting{
    padding-bottom: 1rem;
  border-bottom: 3px solid #b2d4d4;
  margin-bottom: 2rem;
  &>button{
    font: inherit;
    color: teal;
    border: 1px solid teal;
    background-color: transparent;
    border-radius: 4px;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    :hover{
        background-color: #c2fafa;
    }
  }
}
`
