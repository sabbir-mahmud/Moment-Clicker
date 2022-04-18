import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/login/Login';
import Register from './Components/Auth/Register/Register';
import ResetPassword from './Components/Auth/ResetPassword/ResetPassword';
import Home from './Components/Home/Home';
import About from './Components/Pages/About/About';
import Checkout from './Components/Pages/Checkout/Checkout';
import Footer from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import Accounts from './Components/Pages/Accounts/Accounts';
import NotFound from './Components/Pages/NotFound/NotFound';
import ResetUserPassword from './Components/Auth/ResetUserPassword/ResetUserPassword';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
        <Route path="/account" element={<RequireAuth><Accounts /></RequireAuth>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/change-password" element={<ResetUserPassword />} />
      </Routes>
      <div className="mt-3">
        <Footer />
      </div>

    </div >
  );
}

export default App;
