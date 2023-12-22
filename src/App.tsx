import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './pages/Layout/Layout'
import { Signup } from './pages/AuthPages/Signup'
import { ForgetPassword } from './pages/AuthPages/ForgetPassword'
import { Home } from './pages/Home/Home'
import { SignIn } from './pages/AuthPages/SignIn'
import { NewTicket } from './pages/NewTicket/NewTicket'
import { MyTicket } from './pages/MyTicket/MyTicket'
import { useSelector } from 'react-redux'
import { RootState } from './store/store'

function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="new-ticket" element={<NewTicket />} />
          <Route path="my-ticket" element={<MyTicket />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
      {
        !isAuthenticated && <Navigate to={'/signin'} replace={true}/>
      }
    </>
  )
}

export default App
