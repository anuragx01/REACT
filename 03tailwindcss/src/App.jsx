import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'
function App() {
  const [count, setCount] = useState(0)
  
  let myObj = {
    username: "anurag",
    age: 42
  }
  let newArr = [1,2,3]
  return (
    <>
    <Card username = "chaiwithbhai" btnText = "chal aaja"/>
    <Card username = "anurag" btnText = "aa mt jaio"/>
    </>
  )
}

export default App
