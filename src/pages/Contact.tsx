import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Instagram, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const salonName = import.meta.env.VITE_SALON_NAME || 'The Modern Salon'
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '254700000000'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLoading(false)
    toast.success('Message sent! We will get back to you shortly.')
    ;(e.target as HTMLFormElement).reset()
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header */}
      <div className="bg-charcoal text-ivory py-20 text-center">
        <h1 className="font-serif text-5xl mb-4">Get In Touch</h1>
        <p className="text-ivory/70 max-w-lg mx-auto">We'd love to hear from you. Reach out anytime.</p>
      </div>

      <div className="container mx-auto px-4 max-w-6xl mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-serif text-3xl text-charcoal mb-8">Visit {salonName}</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-terracotta mt-1 shrink-0" />
                <div>
                  <h3 className="font-serif font-bold text-lg text-charcoal mb-1">Location</h3>
                  <p className="text-charcoal/70">Kilimani, Nairobi, Kenya</p>
                  <p className="text-charcoal/50 text-sm mt-1">Along Argwings Kodhek Road</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-terracotta mt-1 shrink-0" />
                <div>
                  <h3 className="font-serif font-bold text-lg text-charcoal mb-1">Phone</h3>
                  <p className="text-charcoal/70">+254 700 000 000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-terracotta mt-1 shrink-0" />
                <div>
                  <h3 className="font-serif font-bold text-lg text-charcoal mb-1">Working Hours</h3>
                  <div className="text-charcoal/70 space-y-1 text-sm">
                    <p>Monday – Friday: 8:00 AM – 7:00 PM</p>
                    <p>Saturday: 9:00 AM – 6:00 PM</p>
                    <p>Sunday: 10:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 hover:bg-[#20b858] transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
              <a 
                href="#"
                className="flex items-center gap-2 border border-charcoal text-charcoal px-6 py-3 hover:bg-charcoal hover:text-ivory transition-colors"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-white border border-border p-8 md:p-10">
              <h2 className="font-serif text-3xl text-charcoal mb-2">Send a Message</h2>
              <p className="text-charcoal/60 mb-8">We typically respond within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-charcoal/80">Name *</label>
                    <Input 
                      required 
                      name="name" 
                      placeholder="Your name"
                      className="rounded-none border-border focus-visible:ring-charcoal" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-charcoal/80">Phone</label>
                    <Input 
                      name="phone" 
                      placeholder="+254 700 000 000"
                      className="rounded-none border-border focus-visible:ring-charcoal" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-charcoal/80">Email *</label>
                  <Input 
                    required 
                    type="email" 
                    name="email" 
                    placeholder="your@email.com"
                    className="rounded-none border-border focus-visible:ring-charcoal" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-charcoal/80">Message *</label>
                  <textarea 
                    required
                    name="message"
                    rows={5}
                    placeholder="How can we help you?"
                    className="flex w-full bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-none border border-border focus-visible:ring-charcoal resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full rounded-none bg-charcoal text-ivory hover:bg-terracotta transition-colors h-14 text-lg"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
