import { useState } from 'react'
import { Header } from './Components/Header'
import { Todo } from './Components/Todo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Todo/>
    </div>
  )
}

export default App
