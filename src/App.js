import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart/Cart';
import Breakfast from './Pages/Home/Foods/Breakfast/Breakfast';
import Dinner from './Pages/Home/Foods/Dinner/Dinner';
import Lunch from './Pages/Home/Foods/Lunch/Lunch';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Header from './Pages/Shared/Header/Header';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />}>
          <Route path='breakfast' element={<Breakfast />} />
          <Route path='lunch' element={<Lunch />} />
          <Route path='dinner' element={<Dinner />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
