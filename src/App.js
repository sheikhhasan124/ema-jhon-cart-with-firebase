import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Header from './components/Header/Header';
import Inventory from './components/inventory/Inventory';
import Order from './components/order/Order';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders'element={<Order></Order>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;
