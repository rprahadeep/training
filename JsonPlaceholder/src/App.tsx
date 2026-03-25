import './App.css'
import {Route, Link, Routes, Navigate} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const isAuth = localStorage.getItem('user')
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/dashboard' element={isAuth? <Dashboard></Dashboard> : <Navigate to="/login"></Navigate>}
></Route>      </Routes>
    </>
  )
}

export default App
