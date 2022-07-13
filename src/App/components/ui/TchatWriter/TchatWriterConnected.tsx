import React from 'react'
import { useSelector } from 'react-redux'
import IMessage from '../../../interfaces/IMessage'
import TchatWriter from './TchatWriter'

export default function TchatWriterConnected() {
  const users=useSelector((s:any)=>s.users.values)  
  return (
    <TchatWriter users={users} onMesageSent={(message:IMessage)=>{

    }}/>
  )
}