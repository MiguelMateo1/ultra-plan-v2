import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage, Error, Register, ProtectedRoute, PasswordReset, OTPInput, Reset} from "./pages"
import { Profile, AddSkill, Stats, Layout, MySkills, Resources } from './pages/dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>} >
            <Route index element={<Stats />} />
            <Route path='my-skills' element={<MySkills />} />
            <Route path='add-skill' element={<AddSkill />} />
            <Route path='profile' element={<Profile />} />
            <Route path='resources' element={<Resources />} />
        </Route>

        <Route path="landing" element={<LandingPage />} />
        <Route path="register" element={<Register />} />
        <Route path="/*" element={<Error />} />
        {/* password reset pages */}
        <Route path="/forgotpassword" element={<PasswordReset/>} />
        <Route path="/otp" element={<OTPInput/>} />
        <Route path="/otp/reset" element={<Reset/>} />
      </Routes>
      {/* toast use for popup alerts */}
      <ToastContainer position="top-center" autoClose={4000} hideProgressBar={true} pauseOnFocusLoss={false} />
    </BrowserRouter>
  )
}

export default App
