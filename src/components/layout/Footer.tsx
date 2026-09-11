import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import { Camera, MapPin, Phone, MessageCircle } from 'lucide-react'

export function Footer() {
  const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '254700000000'
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`

  return (
    <footer className="bg-charcoal text-ivory pt-16 pb-8 border-t border-charcoal/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1 flex flex-col items-start md:items-center">
            <Logo lockup="stacked" size="md" variant="light" />
            <p className="mt-6 text-ivory/60 text-sm text-center">
              Elevating beauty through precision and modern aesthetics.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-ivory/70 hover:text-rosegold transition-colors">Services Menu</Link></li>
              <li><Link to="/shop" className="text-ivory/70 hover:text-rosegold transition-colors">Beauty Shop</Link></li>
              <li><Link to="/wigs" className="text-ivory/70 hover:text-rosegold transition-colors">Wigs Collection</Link></li>
              <li><Link to="/gallery" className="text-ivory/70 hover:text-rosegold transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-ivory/70 hover:text-rosegold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-ivory/70 hover:text-rosegold transition-colors">Contact & Location</Link></li>
              <li><Link to="/book" className="text-ivory/70 hover:text-rosegold transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Connect</h4>
            <ul className="space-y-4 text-ivory/70">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-rosegold" />
                <span>Kilimani, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-rosegold" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <a href="#" className="hover:text-rosegold transition-colors">
                  <Camera className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-ivory/10 text-center text-ivory/40 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} The Modern Salon. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-ivory transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-ivory transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp CTA */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </footer>
  )
}
