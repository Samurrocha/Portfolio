import Home from './pages/Home'
import Teste from './pages/Teste'
import { Routes, Route } from 'react-router'
import './App.css'


function App() {

  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/teste'element={<Teste/>} />
  </Routes>
      

    </>
  )
}

export default App
