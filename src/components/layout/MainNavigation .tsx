import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function MainNavigation () {
    return (
        <Header>
            <div className="logo">Great Quotes</div>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName="active" to='/quotes'>All Quotes</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to='/new-quote'>Add a Quote</NavLink>
                    </li>
                </ul>
            </nav>
        </Header>
    )
}
const Header=styled.header`
@media   (max-width:768px) {
    .logo{
        display:none;
    }
    justify-content: center;
    padding:0;
}
widht:100%;
padding:0 10%;
display:flex;   
align-items:center;
justify-content: space-between;
height:5rem;
  background-color:#327C80;
  display:fixed;
  top:0;
  left:0;
  z-index:1;
  .logo{
      color:white;
      font-size:2rem;
  }
  &>nav{
      &>ul{
          display:flex;
        list-style: none;
        &>li{
            margin-left:1rem;
            a{
                color: #88dfdf;
                text-decoration: none;
                &:hover,:active{
                    color: #e6fcfc;
                }
                
            }
            
        }
      }
  }
  .active{
    color: #e6fcfc;
}
`
