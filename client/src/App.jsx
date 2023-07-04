import { BrowserRouter, Routes, Route } from "react-router-dom"
import {LandingPage, Error, Dashboard, Register} from "./pages"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="landing" element={<LandingPage />} />
        <Route path="register" element={<Register />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      {/* toast use for popup alerts */}
      <ToastContainer position="top-center" autoClose={3500} />
    </BrowserRouter>
  )
}

export default App