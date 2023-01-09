import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home'
import Navbar from './routes/navbar/Navbar';
import SignIn from './routes/sigin/SignIn';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route index element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Route> 
    </Routes>
  )

}

export default App;
