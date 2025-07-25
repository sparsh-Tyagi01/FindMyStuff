import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import MainLayout from './components/MainLayout'
import SignIn from './components/SignIn'
import Homepage from './components/Homepage'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Homepage/>}/>
        </Route>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<SignIn/>}/>
      </Routes>
    </>
  )
}

export default App