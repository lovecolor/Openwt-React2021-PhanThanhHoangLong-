import React from 'react'
import style from './User.module.scss'
import Card from '../UI/Card'
import UserItem from './UserItem'

export default function User(props) {
    return (
        <div className={style.user}>
            {
                props.listUser.length>0&&<Card>
                {props.listUser.map((e,i)=><UserItem user={e} key={i}></UserItem>)}
            </Card>
            }
            
        </div>
    )
}
