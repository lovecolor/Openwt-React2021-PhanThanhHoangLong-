import React from 'react'
import styled from 'styled-components'

export default function HomePage() {
    return (
        <Page>
            <h1>Welcome on Board!</h1>
        </Page>
    )
}
const Page=styled.div`
margin: 3rem auto;
  text-align: center;
  &>h1 {
    font-size: 5rem;
  }
  `
