import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Detail from './views/Details';
import Home from './views/Home';
import Footer from './Components/Footer';
import Favorites from './views/Favorites';

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id/:tipo" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
