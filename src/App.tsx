import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Toaster } from '@/components/ui/sonner'

import Home from './pages/Home'
import Services from './pages/Services'
import Shop from './pages/Shop'
import Wigs from './pages/Wigs'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import BookAppointment from './pages/BookAppointment'
import Gallery from './pages/Gallery'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:slug" element={<ProductDetail />} />
            <Route path="/wigs" element={<Wigs />} />
            <Route path="/wigs/:slug" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster position="bottom-right" />
    </Router>
  )
}

export default App
