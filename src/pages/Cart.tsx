import { Link } from 'react-router-dom'
import { useCartStore } from '@/store/cartStore'
import { Button } from '@/components/ui/button'
import { Trash2, Plus, Minus, MessageCircle } from 'lucide-react'

export default function Cart() {
  const { items, removeItem, updateQuantity, getCartTotal, clearCart } = useCartStore()
  
  const salonName = import.meta.env.VITE_SALON_NAME || 'The Modern Salon'
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '254700000000'

  const handleWhatsAppCheckout = () => {
    const total = getCartTotal()
    
    let message = `Hi ${salonName}, I'd like to order:\n\n`
    items.forEach(item => {
      message += `- ${item.quantity}x ${item.name} — KES ${(item.price * item.quantity).toLocaleString()}\n`
      if (item.attributes) {
        const attrs = Object.entries(item.attributes).map(([k, v]) => `${k}: ${v}`).join(', ')
        message += `  (${attrs})\n`
      }
    })
    
    message += `\n*Total: KES ${total.toLocaleString()}*`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Clear cart since it's "checked out" via message
    clearCart()
  }

  if (items.length === 0) {
    return (
      <div className="bg-ivory min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 text-center">
        <h2 className="font-serif text-3xl text-charcoal mb-4">Your cart is empty</h2>
        <p className="text-charcoal/60 mb-8 max-w-md">Looks like you haven't added any beauty products or wigs to your cart yet.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/shop">
            <Button className="rounded-none bg-charcoal text-ivory w-full sm:w-auto h-12 px-8 hover:bg-terracotta transition-colors">
              Shop Beauty Products
            </Button>
          </Link>
          <Link to="/wigs">
            <Button variant="outline" className="rounded-none border-charcoal text-charcoal w-full sm:w-auto h-12 px-8 hover:bg-charcoal hover:text-ivory transition-colors">
              Explore Wigs
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-ivory min-h-screen pb-24 pt-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="font-serif text-4xl text-charcoal mb-10 border-b border-border pb-6">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 md:gap-6 bg-white p-4 border border-border">
                  <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-muted">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-grow flex flex-col">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <Link to={`/shop/${item.id}`} className="font-serif font-bold text-lg md:text-xl text-charcoal hover:text-rosegold transition-colors line-clamp-1">
                          {item.name}
                        </Link>
                        {item.attributes && (
                          <p className="text-sm text-charcoal/60 mt-1">
                            {Object.values(item.attributes).join(' • ')}
                          </p>
                        )}
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-charcoal/40 hover:text-terracotta transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center border border-charcoal/20">
                        <button 
                          className="p-2 hover:bg-charcoal/5 transition-colors disabled:opacity-50"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-10 text-center font-medium text-sm">{item.quantity}</span>
                        <button 
                          className="p-2 hover:bg-charcoal/5 transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      
                      <span className="font-medium text-charcoal">
                        KES {(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 border border-border sticky top-28">
              <h3 className="font-serif font-bold text-xl mb-6">Order Summary</h3>
              
              <div className="space-y-4 text-sm text-charcoal/80 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>KES {getCartTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="italic">Calculated on WhatsApp</span>
                </div>
              </div>
              
              <div className="border-t border-border pt-4 mb-8 flex justify-between items-center font-medium text-lg text-charcoal">
                <span>Total</span>
                <span className="text-terracotta">KES {getCartTotal().toLocaleString()}</span>
              </div>
              
              <Button 
                onClick={handleWhatsAppCheckout}
                className="w-full rounded-none bg-[#25D366] text-white hover:bg-[#20b858] transition-colors h-14 text-lg flex gap-2 items-center justify-center"
              >
                <MessageCircle className="h-5 w-5" />
                Checkout via WhatsApp
              </Button>
              
              <p className="text-xs text-charcoal/50 text-center mt-4">
                You will be redirected to WhatsApp to confirm your order details and arrange payment directly with our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
