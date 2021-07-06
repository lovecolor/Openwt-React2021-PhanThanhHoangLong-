import React from 'react'
import styled from 'styled-components'
import MainNavigation from './MainNavigation '

export default function Layout(props:any) {
    return (
        <Container>
            <MainNavigation></MainNavigation>
            <main>{props.children}</main>
        </Container>
    )
}
const Container=styled.div`
background-color:#EBF7FA;
  // max-width:100%;
main{
    
  
  max-width:50%;
  min-width:250px;
  margin:auto;
  
  padding:2rem;
}
header{
  
}
`
