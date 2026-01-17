import { Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Product from "./page/Product";
import About from './page/About';
import Contact from './page/Contact';

const App = () => {
  return (
    <div className='w-full h-[99.9vh] overflow-x-hidden bg-black'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;