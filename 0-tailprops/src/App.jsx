import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-black-400 text-white p-4 rounded-xl mb-4'>The best girlfriend</h1> 
    <Card username ="Sampurna" videoSrc="/a.mp4"  ptxt="The love of my life" btntxt='why she is the best'/>
    
    </>
  )
}

export default App
