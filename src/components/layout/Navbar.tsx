import { Link, useLocation } from 'react-router-dom'
import { Logo } from '../Logo'
import { useCartStore } from '@/store/cartStore'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const cartItems = useCartStore(state => state.items)
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Shop', path: '/shop' },
    { name: 'Wigs', path: '/wigs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false
    return location.pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-ivory/80 backdrop-blur-md hairline-divider">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="z-50">
          <Logo lockup="horizontal" size="sm" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-rosegold",
                isActive(link.path) ? "text-charcoal" : "text-charcoal/60"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 z-50">
          <Link to="/book" className="hidden md:block">
            <Button className="bg-terracotta hover:bg-terracotta/90 text-ivory rounded-none">
              Book Now
            </Button>
          </Link>
          
          <Link to="/cart" className="relative p-2">
            <ShoppingCart className="h-5 w-5 text-charcoal hover:text-rosegold transition-colors" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-terracotta text-ivory text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <button 
            className="md:hidden p-2 text-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-ivory z-40 p-4 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-6 items-center pt-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-2xl font-serif text-charcoal hover:text-rosegold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/book" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 w-full">
              <Button className="w-full bg-terracotta hover:bg-terracotta/90 text-ivory rounded-none h-12 text-lg">
                Book Appointment
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
