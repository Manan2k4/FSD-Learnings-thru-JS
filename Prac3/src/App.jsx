// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Demo1 from './components/demo1'
// import Demo2 from './components/demo2'
// import Message from './components/Message'
import Counter from './components/Counter'
import LifecycleMount from './components/LifecycleMount'
import Parent from './components/Parent'

function App() {
  return (
    <>
      <LifecycleMount/>
      <Counter/>
      <Parent/>
    </>
  )
}

export default App
