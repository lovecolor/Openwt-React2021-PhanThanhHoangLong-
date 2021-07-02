import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import useInput from '../hooks/use-input'

const Container = styled.div`

max-width:40%;
margin:auto;
background-color:white;
padding:1rem;
border-radius:14px;
// box-shadow: 0 12px 28px 0 lightgray;
form{
    display:flex;
flex-wrap: wrap;
position: relative;
    width:100%;
    button{
        position: absolute;
        bottom:0;
        right:0;
        border-radius:3px;
        border:none;
        background-color:lightgray;
        padding:.5rem 1rem;
        btn-valid{
            background-color:red;
        }
    }
}
`
let isValids:any = []
let isResets:any=[]
export default function Form(props: any) {
    const setIsValid=(i:number,value:boolean)=>{
        isValids[i]=value
    }
    const submitHandler=(e:any)=>{
        e.preventDefault()
        isResets=isResets.map((e:boolean)=>true)
        console.log(isResets)
    }
    const formIsValid:boolean=isValids.filter((e:boolean)=>!e).length==0
    return (
        <Container>
            <form onSubmit={submitHandler}>
                {
                    props.listIp.map((e: any, i: number) => {
                        
                        isValids.push(true)
                        isResets.push(false)
                        return <Input key={i} configIp={e} isReset={isResets[i]} setValid={setIsValid.bind(null,i)}></Input>
                    })
                }
                <button className={formIsValid? "btn-valid":""}>{props.labelSubmit}</button>
            </form>

        </Container>
    )
}
