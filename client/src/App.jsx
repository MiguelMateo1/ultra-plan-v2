import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage, Error, Register, ProtectedRoute} from "./pages"
import { Profile, AddSkill, Stats, Layout, MySkills } from './pages/dashboard';
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
        </Route>

        <Route path="landing" element={<LandingPage />} />
        <Route path="register" element={<Register />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      {/* toast use for popup alerts */}
      <ToastContainer position="top-center" autoClose={3000} />
    </BrowserRouter>
  )
}

export default App
