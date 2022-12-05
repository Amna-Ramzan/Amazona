import React from 'react'
import Navbar from './component/navbar'
import Form from './component/form'
import  {useState}  from 'react'
function App() {
  const[mode,setMode]=useState('white');
  const togglemode=()=>{
    if(mode === "black"){
      setMode("white")
      document.body.style.backgroundColor="white"
    }
    else{
      setMode("black")
      document.body.style.backgroundColor="black"
    }
  }
  return (
    <div>
      <Navbar Navbar="Nav" mode={mode} data={togglemode}/>
<Form heading="Enter The Text analize Bellow" mode={mode}/>
    </div>
  )
}

export default App