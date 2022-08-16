import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home';
import Event from './pages/Event/Event';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/event' element={<Event></Event>}></Route>
      </Routes>
    </div>
  );
}

export default App;
