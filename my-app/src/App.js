import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SideBar from './Components/SideBar';
import Slider1 from './Components/Slider1';
import Slider2 from './Components/Slider2';
import Slider3 from './Components/Slider3';


function App() {
  return (
    <div>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path='/' element={<Slider1/>}></Route>
          <Route path='/wild' element={<Slider2/>}></Route>
          <Route path='/cars' element={<Slider3/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
