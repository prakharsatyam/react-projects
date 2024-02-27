import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
   const data = useLoaderData()
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/prakharsatyam`).then(response => response.json()).then(data=>{
    //     console.log(data)    
    //     setData(data)})
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers :{data.followers}
    <img src={data.avatar_url} alt=""  width="300"/>
    </div>
  )
}

export default Github

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader= async () => {
    const response = await fetch(`https://api.github.com/users/prakharsatyam`)
    return response.json();
    // .then(response => response.json()).then(data=>{
    //     console.log(data)    
    //     setData(data)})
    
}