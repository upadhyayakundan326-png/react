import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
function App(){
  let [counter,setcounter]=useState(0)
let add=()=>{
  if(counter==20){
    setcounter(counter=20)
  }
  else{
    setcounter(counter+1)

  }
}
let rem=()=>{
  if(counter>0){
  setcounter(counter-1)
  }
  else{
    setcounter(counter=0)
  }
}


  return(
    <>
    <h1> project</h1>

    <h2> value:{counter}</h2>
    <button onClick={add}>ADD</button>
    <button onClick={rem}>REMOVE</button>
    </>
  )

}
export default App;
  