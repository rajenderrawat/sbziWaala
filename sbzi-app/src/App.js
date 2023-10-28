import { Navbar } from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Dairy } from './pages/Dairy';
import { Imported } from './pages/Imported';
import { Fruits } from './pages/Fruits';
import { Cart } from './pages/Cart';
import { LoginSign } from './pages/LoginSign'
import { Footer } from './components/Footer';
import { ShopContextProvider } from './components/Contextprovider';

function App() {
  return (
    <div className="App">
      <div>
        <ShopContextProvider>
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/imported" element={<Imported />}></Route>
              <Route path="/fruits" element={<Fruits />}></Route>
              <Route path="/dairy" element={<Dairy />}></Route>

              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<LoginSign />} />

            </Routes>

            <Footer />
          </BrowserRouter>
        </ShopContextProvider>
      </div>
      <div>

      </div>
    </div>
  );
}
export default App;