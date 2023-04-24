import { Routes, Route } from 'react-router-dom'
import './App.css'

import Nav from "./Nav"
import Main from "./pages/Main"
import Shoes from "./pages/Shoes"
import Clothes from "./pages/Clothes"
import Detail from "./pages/Detail"
import Cart from "./pages/Cart"
import Result from "./pages/Result"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;