import Home from "./Pages/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./Pages/Login";
import "./App.css"
import AdmProtected from "./Utilities/ProtectedRoute";
import Dashboard from "./Pages/Dashboard";
import Navbar from './Utilities/Navbar'
import Footer from './Utilities/Footer'
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
     <BrowserRouter>
      <header style={{marginBottom:'105px'}}>
     <ToastContainer  
   position='top-center'
   autoClose={5000}
   hideProgressBar={false}
   newestOnTop={false}
   rtl={false}
   pauseOnFocusLoss
   draggable
   limit={1}
   pauseOnHover
   />
     <Navbar/>
      </header>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/*' element={<h1>404 Page Not Found</h1>}/>
      <Route path='/admin-login' element={<Login/>}/>
      <Route path='/dashboard' element={<AdmProtected><Dashboard/></AdmProtected>}/>
      {/* admin Routes */}
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App;
