import { useState } from "react";
//
export default function App(){
  const [goal, setgoal] = useState(7)
  const [color,setColor]=useState("bg-blue-300")
  const [textColor,setTextColor] =useState("text-black")
  return(
    <>
    <div className="flex font-semibold justify-start pl-20 mt-20 h-50 mb-5">
    <div className="flex-col">
    <h2 className="pb-10 text-3xl"> Goalcount: {goal} </h2>
    <button className="h-10 mr-10 px-3  bg-blue-300 rounded-md" onClick={() =>setgoal(goal+2)}>Increment</button>
    <button className="h-10 rounded-md px-3 bg-red-300" onClick={()=>setgoal(goal-2)}>Decrement</button>
    </div>
    </div>
    

    <h1 className={`text-3xl ml-20 font-bold w-72 h-10 mt-20 rounded-xl ${textColor} ${color}`}>Color changing Text</h1>
    <div className="flex mt-10 ml-20 p-5">
      <h1 className="text-xl font-semibold">Background Color</h1>
      <button className="h-10 ml-10 p-2 font-semibold bg-green-300 rounded-lg" onClick={() => setColor("bg-green-300")}>Green</button>
      <button className="h-10 ml-10 p-2 font-semibold bg-purple-300 rounded-lg" onClick={() => setColor("bg-purple-300")}>Purple</button>
      <button className="h-10 ml-10 p-2 font-semibold bg-red-300 rounded-lg" onClick={() => setColor("bg-red-300")}>Red</button>
    </div>
    <div className="flex mt-10 ml-20 p-5">
      <h1 className="text-xl font-semibold ">Text Color</h1>
      <button className="h-10 ml-10 p-2 font-bold text-green-300 rounded-lg" onClick={() => setTextColor("text-green-800")}>Green</button>
      <button className="h-10 ml-10 p-2 font-bold text-purple-300 rounded-lg" onClick={() => setTextColor("text-purple-800")}>Purple</button>
      <button className="h-10 ml-10 p-2 font-bold text-red-300 rounded-lg" onClick={() => setTextColor("text-red-800")}>Red</button>
      <button className="h-10 ml-10 p-2 font-bold text-blue-800 rounded-lg " onClick={() => setTextColor("text-blue-800")}>Navy Blue</button>
    </div>
    </>
  );
}









// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
