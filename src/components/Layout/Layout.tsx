import React from 'react'
import MainNavigation from './MainNavigation'

export default function Layout(props:any) {
    return (
        <>
          <MainNavigation></MainNavigation> 
          <main>
              {props.children}
          </main>
        </>
    )
}
