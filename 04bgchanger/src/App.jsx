import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200" 
      style={{background: color}}> 

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setColor("red")}>Red</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setColor("blue")}>Blue</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => setColor("green")}>Green</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => setColor("yellow")}>Yellow</button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded" onClick={() => setColor("purple")}>Purple</button>
        <button className="bg-olive-500 text-white px-4 py-2 rounded" style={{ backgroundColor: "olive" }} onClick={() => setColor("olive")}>Olive</button>

        <button className="bg-gray-500 text-white px-4 py-2 rounded"  onClick={() => setColor("gray")}>Gray</button>
      </div>
      </div>
    </>
  )
}

export default App
