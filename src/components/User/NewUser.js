import React from 'react'
import Card from '../UI/Card'
import Form from './Form'
import style from './NewUser.module.scss'

export default function NewUser(props) {
    return (
        <div className={style['new-user']} >
            <Card>
                <Form onSubmit={props.onSubmit}></Form>
            
            </Card>
         
        </div>
    )
}
