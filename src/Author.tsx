import React, { useContext, useState } from 'react'
import { NameContext } from './hooks/Context'

export default function Author() {
    const {updateName}= useContext(NameContext)
    const [state,setState] = useState("")
  return (
    <div>
        <h1>Author Component</h1>
        <input type="text" onChange={(e)=>{setState(e.target.value)}}/>
        <button onClick={()=>{updateName(state)}}>Submit</button>
    </div>
  )
}
