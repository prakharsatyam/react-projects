// This file is created to not write <UserContext.Provider value={{user,setUser}}>  {children}  </UserContext.Provider> everywhere
import { useState } from "react";
import UserContext from "./UserContext";
// eslint-disable-next-line react/prop-types
const UserContextProvider = ({children}) =>{// the chlidren refers to props which are going to be enclosed by USerCOntextProvider function.It's essential function here is to prevent code repetition for me. The code snippet in the return statement has to be repeated at places where we would be needing the context so we wrap them in a function and use that in place of the code 
    const [user,setUser]=useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider