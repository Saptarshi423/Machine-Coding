import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [open , setOpen] = useState(true)

  return (
    <>
      <div className='container'>
        <button className='btn' >Open Modal</button>
        {open && <Modal/>}
      </div>
    </>
  )
}

const Modal = () => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close'>&times;</span>
        <h2>Modal Header</h2>
        <p>This is a simple modal.</p>
      </div>
    </div>
  )
}

export default App
