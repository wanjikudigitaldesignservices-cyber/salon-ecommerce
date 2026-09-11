import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ServiceCard } from '@/components/ServiceCard'
import { ProductCard } from '@/components/ProductCard'
import { useEffect, useState } from 'react'
import { getProducts, getServices, getTestimonials, getGallery } from '@/api/supabase'
import heroBg from '@/assets/hero-bg.jpg'

export default function Home() {
  const [products, setProducts] = useState<any[]>([])
  const [services, setServices] = useState<any[]>([])
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [gallery, setGallery] = useState<any[]>([])
  const salonName = import.meta.env.VITE_SALON_NAME || 'The Modern Salon'

  useEffect(() => {
    async function loadData() {
      const [prodData, servData, testData, galData] = await Promise.all([
        getProducts('beauty_product'),
        getServices(),
        getTestimonials(),
        getGallery()
      ])
      setProducts((prodData as any[]).slice(0, 4))
      setServices((servData as any[]).slice(0, 3))
      setTestimonials((testData as any[]).slice(0, 3))
      setGallery((galData as any[]).slice(0, 6))
    }
    loadData()
  }, [])

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="bg-ivory min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Salon interior" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory font-medium tracking-tight mb-6 leading-tight">
            Elevate Your <br /> Everyday Beauty
          </h1>
          <p className="text-lg md:text-xl text-ivory/90 mb-10 max-w-2xl mx-auto font-light">
            Experience luxury treatments and curated products at {salonName}, your sanctuary for modern aesthetics in Kilimani.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg" className="rounded-none bg-terracotta hover:bg-terracotta/90 text-ivory px-8 h-14 w-full sm:w-auto text-lg">
                Book Appointment
              </Button>
            </Link>
            <Link to="/shop">
              <Button size="lg" variant="outline" className="rounded-none border-ivory text-ivory hover:bg-ivory hover:text-charcoal px-8 h-14 w-full sm:w-auto text-lg bg-transparent">
                Shop Products
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Brand Strip */}
      <section className="py-12 bg-charcoal text-ivory hairline-divider">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-around gap-8 text-center md:text-left">
          <h3 className="font-serif text-2xl md:text-3xl max-w-sm">Where precision meets artistry.</h3>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-sm uppercase tracking-widest text-ivory/60">
            <div>Premium Products</div>
            <div>Expert Stylists</div>
            <div>Kilimani, Nairobi</div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
        >
          <div>
            <h2 className="font-serif text-4xl text-charcoal mb-2">Signature Services</h2>
            <p className="text-charcoal/60">Tailored treatments for your unique needs.</p>
          </div>
          <Link to="/services">
            <Button variant="link" className="text-terracotta p-0 hover:no-underline hover:text-charcoal transition-colors">
              View Full Menu &rarr;
            </Button>
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white hairline-divider">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
          >
            <div>
              <h2 className="font-serif text-4xl text-charcoal mb-2">Curated Beauty</h2>
              <p className="text-charcoal/60">Salon-quality products for your daily routine.</p>
            </div>
            <Link to="/shop">
              <Button variant="link" className="text-terracotta p-0 hover:no-underline hover:text-charcoal transition-colors">
                Shop All Products &rarr;
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Wigs Teaser */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1595476108010-b4d1f10a5144?q=80&w=2000" 
            alt="Premium Wigs" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <h2 className="font-serif text-5xl md:text-6xl text-ivory mb-6 max-w-2xl leading-tight">
            The Ultimate <br className="hidden md:block"/> Wig Collection
          </h2>
          <Link to="/wigs">
            <Button size="lg" className="rounded-none bg-ivory text-charcoal hover:bg-rosegold hover:text-ivory px-8 h-14">
              Explore Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 container mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl text-charcoal mb-16">Client Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="p-8 border border-border bg-white text-left flex flex-col items-center text-center">
              <div className="flex gap-1 mb-6 text-rosegold">
                {Array.from({length: t.rating}).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="font-serif text-lg text-charcoal/80 mb-6 italic">"{t.quote}"</p>
              <p className="text-sm font-bold uppercase tracking-wider text-charcoal mt-auto">— {t.client_name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="grid grid-cols-2 md:grid-cols-6 h-64 md:h-80">
        {gallery.map(img => (
          <Link key={img.id} to="/gallery" className="relative group overflow-hidden block h-full w-full">
            <img src={img.image_url} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-serif text-xl">
              View
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
