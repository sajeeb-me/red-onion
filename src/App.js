import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart/Cart';
import FoodDetails from './Pages/Home/FoodDetails/FoodDetails';
import AddLunch from './Pages/Home/Foods/AddLunch/AddLunch';
import Breakfast from './Pages/Home/Foods/Breakfast/Breakfast';
import Dinner from './Pages/Home/Foods/Dinner/Dinner';
import EditLunch from './Pages/Home/Foods/EditLunch/EditLunch';
import Lunch from './Pages/Home/Foods/Lunch/Lunch';
import UpdateLunch from './Pages/Home/Foods/UpdateLunch/UpdateLunch';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<Breakfast />} />
        </Route>
        <Route path='/home' element={<Home />}>
          <Route index element={<Breakfast />} />
          <Route path='breakfast' element={<Breakfast />} />
          <Route path='lunch' element={<Lunch />} />
          <Route path='dinner' element={<Dinner />} />
        </Route>
        <Route path='/lunch/add_lunch' element={
          <RequireAuth>
            <AddLunch />
          </RequireAuth>
        } />
        <Route path='/lunch/edit_lunch' element={
          <RequireAuth>
            <EditLunch />
          </RequireAuth>
        } />
        <Route path='/lunch/update_lunch/:id' element={
          <RequireAuth>
            <UpdateLunch />
          </RequireAuth>
        } />
        <Route path='/food-details' element={
          <RequireAuth>
            <FoodDetails />
          </RequireAuth>
        } />
        <Route path='/cart' element={
          <RequireAuth>
            <Cart />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
