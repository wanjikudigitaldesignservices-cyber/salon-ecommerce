import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getServices, createAppointmentRequest } from '@/api/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { Calendar, Clock, User, Phone, CheckCircle, MessageCircle } from 'lucide-react'

export default function BookAppointment() {
  const [searchParams] = useSearchParams()
  const preselectedService = searchParams.get('service')
  
  const [services, setServices] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    service: preselectedService || '',
    preferred_date: '',
    preferred_time: '',
    notes: ''
  })

  useEffect(() => {
    async function loadServices() {
      const data = await getServices()
      setServices(data as any[])
    }
    loadServices()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      await createAppointmentRequest(formData)
      setSubmitted(true)
      toast.success("Booking Request Sent!")
    } catch (error) {
      toast.error("Failed to submit request. Please try again.")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleWhatsAppConfirm = () => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '254700000000'
    const message = `Hi, I just booked an appointment online and wanted to confirm.\n\nName: ${formData.full_name}\nService: ${formData.service}\nDate: ${formData.preferred_date}\nTime: ${formData.preferred_time}`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  if (submitted) {
    return (
      <div className="bg-ivory min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full bg-white p-8 border border-border text-center">
          <CheckCircle className="h-16 w-16 text-terracotta mx-auto mb-6" />
          <h2 className="font-serif text-3xl text-charcoal mb-4">Request Received</h2>
          <p className="text-charcoal/70 mb-8">
            Thank you, {formData.full_name}. We have received your request for a {formData.service} on {formData.preferred_date}. Our team will review and confirm shortly.
          </p>
          <div className="space-y-4">
            <Button 
              onClick={handleWhatsAppConfirm}
              className="w-full rounded-none bg-[#25D366] text-white hover:bg-[#20b858] transition-colors h-14 text-lg flex gap-2 items-center justify-center"
            >
              <MessageCircle className="h-5 w-5" />
              Fast-track via WhatsApp
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/'}
              className="w-full rounded-none border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory h-14"
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-ivory min-h-screen pb-24 pt-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Book an Appointment</h1>
          <p className="text-charcoal/70">Reserve your time with our expert stylists.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 border border-border space-y-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-charcoal/80 flex items-center gap-2">
                <User className="h-4 w-4" /> Full Name *
              </label>
              <Input 
                required 
                name="full_name" 
                value={formData.full_name} 
                onChange={handleChange} 
                className="rounded-none border-border focus-visible:ring-charcoal"
                placeholder="Jane Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-charcoal/80 flex items-center gap-2">
                <Phone className="h-4 w-4" /> Phone Number *
              </label>
              <Input 
                required 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                className="rounded-none border-border focus-visible:ring-charcoal"
                placeholder="+254 700 000 000"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-charcoal/80 flex items-center gap-2">
              Service *
            </label>
            <select 
              required
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="flex h-10 w-full bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-none border border-border focus-visible:ring-charcoal"
            >
              <option value="" disabled>Select a service</option>
              {services.map(s => (
                <option key={s.id} value={s.name}>{s.name} - KES {s.price}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-charcoal/80 flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Preferred Date *
              </label>
              <Input 
                required 
                type="date"
                name="preferred_date" 
                value={formData.preferred_date} 
                onChange={handleChange} 
                className="rounded-none border-border focus-visible:ring-charcoal"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-charcoal/80 flex items-center gap-2">
                <Clock className="h-4 w-4" /> Preferred Time *
              </label>
              <Input 
                required 
                type="time"
                name="preferred_time" 
                value={formData.preferred_time} 
                onChange={handleChange} 
                className="rounded-none border-border focus-visible:ring-charcoal"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-charcoal/80">
              Additional Notes
            </label>
            <textarea 
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="flex min-h-[100px] w-full bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-none border border-border focus-visible:ring-charcoal resize-none"
              placeholder="Any specific requests or hair condition we should know about?"
            />
          </div>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full rounded-none bg-charcoal text-ivory hover:bg-terracotta transition-colors h-14 text-lg mt-4"
          >
            {loading ? "Submitting..." : "Request Appointment"}
          </Button>
        </form>
      </div>
    </div>
  )
}
