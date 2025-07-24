import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import MainLayout from './components/MainLayout'
import SignIn from './components/SignIn'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<SignIn/>}/>
      </Routes>
    </>
  )
}

export default App