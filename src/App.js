import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Offers from './pages/Offers';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes> {/* Opening tag */}
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/offers" element={<Offers />} />
      </Routes> {/* Closing tag - This was the missing part! */}
    </Router>
  );
}

export default App;