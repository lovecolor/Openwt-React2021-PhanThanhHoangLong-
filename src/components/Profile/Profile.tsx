import React from 'react'
import ProfileForm from './ProfileForm'
import styled from 'styled-components'

export default function Profile() {
    return (
        <UserProfile>
            <h1>Your Profile</h1>
            <ProfileForm></ProfileForm>
        </UserProfile>
    )
}
const UserProfile=styled.div`
margin: 3rem auto;
  text-align: center;
  h1 {
    font-size: 5rem;
  }
`