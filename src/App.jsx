import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Form from './Components/Form/Form'
import User from './Components/User/User'
import Update from './Components/Update/Update'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="user" element={<User/>}/>
        <Route path='update/:id' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App