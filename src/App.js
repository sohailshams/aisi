import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home'
import Navbar from './routes/navbar/Navbar';
import Shop from './routes/shop/Shop';
import SignIn from './routes/sigin/SignIn';
import Checkout from './routes/checkout/Checkout';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route index element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/checkout' element={<Checkout />} />
      </Route> 
    </Routes>
  )

}

export default App;
