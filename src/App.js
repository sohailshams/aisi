import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home'
import Navbar from './routes/navbar/Navbar';
import Shop from './routes/shop/Shop';
import SignIn from './routes/sigin/SignIn';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route index element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/shop' element={<Shop />} />
      </Route> 
    </Routes>
  )

}

export default App;
