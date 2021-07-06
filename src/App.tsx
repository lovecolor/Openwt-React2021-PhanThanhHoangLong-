import React from 'react';


import styled from 'styled-components';
import { Redirect, Route, Switch } from 'react-router-dom';
import AllQuoctes from './pages/AllQuoctes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
      <Switch>
          <Route path='/' exact>
            <Redirect to="/quotes"></Redirect>
          </Route>
          <Route path='/quotes' exact>
            <AllQuoctes></AllQuoctes>
          </Route>
          <Route path='/new-quote'>
            <NewQuote></NewQuote>
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail></QuoteDetail>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
    </Layout>
  );
}


export default App;
