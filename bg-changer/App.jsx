import { useState } from 'react'

import './App.css'


function App() {
  const [color,setcolor] = useState('olive')
  document.body.style.backgroundColor=color
  let toggle=(ncolor)=>{
  if(color===ncolor){
    setcolor("olive")
  }
  else{
    setcolor(ncolor)
  }
  }
  return(
    <div className='main'>
    <h1>Bg- changer</h1>
    <div className='margin'>
    <button className="red" onClick={()=>toggle("red")}>red</button>
    
    <button className="pink" onClick={()=>toggle("pink")}>pink</button>
    <button className="yellow" onClick={()=>toggle("yellow")}>yellow</button>
    <button className="blue" onClick={()=>toggle("blue")}>blue</button>
    <button className="orange" onClick={()=>toggle("orange")}>orange</button>
    </div>
    </div>
  )
}
export default App;