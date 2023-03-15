// import './App.css'
import SignUpComponent from './assets/components/SignUpComponent'
import LoginPage from './assets/components/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import UserDetails from './assets/components/UserDetails'

function App() {
  const [user, setuser] = useState({})

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<SignUpComponent setuser={setuser} />} />
          <Route path='loginpage' element={<LoginPage user={user} />} />
          <Route path='details' element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
