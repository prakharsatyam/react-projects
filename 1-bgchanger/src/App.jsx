import { useState } from "react"
function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <div className="w-full h-screen duration-200" 
    style = {{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-24 inset-x-0 px-20" >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl"
        >
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gradient-to-r from-blue-500 to-green-500" onClick={()=>setColor("red")}>red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gradient-to-r from-blue-500 to-green-500" onClick={()=>setColor("beige")}>beige</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gradient-to-r from-blue-500 to-green-500" onClick={()=>setColor("white")}>white</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gradient-to-r from-blue-500 to-green-500" style={{backgroundColor:"lavender"}}onClick={()=>setColor("lavender")}>lavender</button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
