import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Tienda';
import Cart from './pages/Cart';
import ShopContextProvider from './context/ShopContext';
import FormContextProvider from './context/FormContext';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter className="w-screen h-screen">
      <ShopContextProvider>
        <FormContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Tienda' element={<Shop/>} />
            <Route path='/Cesta' element={<Cart/>} />
            <Route path='/Checkout' element={<Checkout/>} />
          </Routes>
        </FormContextProvider>
      </ShopContextProvider>
    </BrowserRouter>
  );
}

export default App;
