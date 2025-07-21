// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Demo1 from './components/demo1'
import Demo2 from './components/demo2'

function App() {
  return (
    <>
      <Demo1 dept="CSE" institute="CSPIT"/>
      <Demo1 dept="CE" institute="CSPIT"/>
      <Demo1>
        <button>Action</button>
      </Demo1>
      <Demo2 dept='CSE'/>
    </>
  )
}

export default App
