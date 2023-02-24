import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/login/Login';
import Register from './Components/Auth/Register/Register';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import ResetPassword from './Components/Auth/ResetPassword/ResetPassword';
import ResetUserPassword from './Components/Auth/ResetUserPassword/ResetUserPassword';
import Home from './Components/Home/Home';
import Accounts from './Components/Pages/Accounts/Accounts';
import Checkout from './Components/Pages/Checkout/Checkout';
import NotFound from './Components/Pages/NotFound/NotFound';
import Footer from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
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
