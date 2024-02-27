import { useState,useContext } from 'react';
import UserContext from './../context/UserContext';


function Login() {
    const [username,setUsernsme]=useState('')
    const [password,setpassword]=useState('')
    const {setUser} = useContext(UserContext)// Here we bring the setUser function from the store of context
    const handleSubmit=(e)=>{e.preventDefault()// the default behaviour mighht reload the page perform validations and reset the form values.
    setUser({username,password})}
  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange={(e)=>setUsernsme(e.target.value)} placeholder='username' />
        {"        "}
        <input type="text"
        value={password}
        onChange={(e)=>setpassword(e.target.value)} placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login