import { useState } from 'react'
import HelloWorld from './pages/HelloWorld'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <HelloWorld/>
   </div>
     
  )
}

export default App
