import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home';
import Event from './pages/Event/Event';
import NotFound from './pages/Shared/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Blog from './pages/Blog/Blog';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { ToastContainer } from 'react-toastify';
import Events from './pages/Events/Events';
import RequireAuth from './pages/Shared/RequireAuth/RequireAuth';
import AddEvent from './pages/AddEvent/AddEvent';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/events' element={<Events></Events>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/add-event' element={
          <RequireAuth>
            <AddEvent></AddEvent>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
