import React,{useState} from 'react'
import Home from './Home'

function Start() {
    const [login, setLogin] = useState(false)
  return (
    <div>
        <button onClick={()=>{setLogin(true)}}>login</button>
        {login? <Home/>:'please login'}
    </div>
  )
}

export default Start