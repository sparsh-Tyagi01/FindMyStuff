import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/regiter' element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App