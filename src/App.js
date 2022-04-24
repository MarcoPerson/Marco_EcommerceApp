import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import {Routes, Route} from 'react-router-dom'
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/products/:id' element={<Product />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
