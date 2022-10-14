import "./App.css"
import Navbar from "./components/Navbar";
import Landing from "./sections/Landing";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import OderForm from "./pages/OderForm";
import UpdateReview from "./pages/UpdateReview";
import UserForm from "./pages/UserForm";
import Success from "./pages/Success";
import Features from "./sections/Features";
import Footer from "./components/Footer";
import DeleteForm from "./pages/DeleteForm";
import Singup from "./pages/Signup";
import Login from "./pages/Login";



function App() {
  return (
     //create a router
      <div className="app">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Singup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Landing />} />
                <Route path="/home" element={<Features />} />
                <Route path="/order" element={<OderForm />} />
                <Route path="/review" element={<UpdateReview />} />
                <Route path='/delete' element={<DeleteForm />} />
                <Route path="/new/review" element={<UserForm />} />
                <Route path="/success" element={<Success />} />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
