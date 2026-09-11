'use client';

import { useState, useEffect } from 'react'
import { getServices } from '@/api/supabase'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

export default function Services() {
  const [services, setServices] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchServices() {
      setLoading(true)
      try {
        const data = await getServices()
        setServices(data as any[])
      } catch (error) {
        console.error("Failed to fetch services", error)
      } finally {
        setLoading(false)
      }
    }
    fetchServices()
  }, [])

  const categories = ['Hair', 'Nails', 'Skin', 'Spa']

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header */}
      <div className="bg-charcoal text-ivory py-20 text-center">
        <h1 className="font-serif text-5xl mb-4">Service Menu</h1>
        <p className="text-ivory/70 max-w-lg mx-auto">Precision, artistry, and unparalleled relaxation.</p>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-4xl">
        {loading ? (
          <div className="space-y-12 animate-pulse">
            {[1, 2].map(i => (
              <div key={i}>
                <div className="h-8 bg-border/50 w-32 mb-6" />
                <div className="space-y-4">
                  {[1, 2, 3].map(j => (
                    <div key={j} className="h-24 bg-white/50 border border-border" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-16">
            {categories.map(category => {
              const categoryServices = services.filter(s => s.category === category)
              if (categoryServices.length === 0) return null

              return (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-serif text-3xl text-charcoal mb-8 border-b border-border pb-4">
                    {category}
                  </h2>
                  <div className="space-y-4">
                    {categoryServices.map(service => (
                      <div key={service.id} className="bg-white border border-border flex flex-col md:flex-row items-start md:items-stretch justify-between hover:shadow-md transition-shadow overflow-hidden">
                        
                        <div className="flex flex-col md:flex-row flex-grow w-full md:w-auto">
                          {/* Image */}
                          {service.image_url ? (
                            <img 
                              src={service.image_url} 
                              alt={service.name} 
                              className="w-full md:w-48 h-48 md:h-auto object-cover flex-shrink-0" 
                            />
                          ) : (
                            <div className="w-full md:w-48 h-48 md:h-auto bg-neutral-200 flex flex-shrink-0 items-center justify-center text-charcoal/40 font-serif">
                              No Image
                            </div>
                          )}

                          {/* Details */}
                          <div className="p-6 flex flex-col justify-center flex-grow">
                            <div className="flex justify-between items-start md:items-center mb-2">
                              <h3 className="font-serif font-semibold text-xl text-charcoal">{service.name}</h3>
                              <span className="font-medium text-terracotta md:hidden whitespace-nowrap ml-4">
                                KES {service.price.toLocaleString()}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-charcoal/60">
                              <Clock className="h-4 w-4" />
                              <span>{service.duration_minutes || service.duration || 60} min</span>
                            </div>
                          </div>
                        </div>

                        {/* Pricing & Booking */}
                        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 md:border-l p-6 border-border bg-ivory/30">
                          <span className="font-medium text-terracotta hidden md:block text-lg whitespace-nowrap">
                            KES {service.price.toLocaleString()}
                          </span>
                          <Link href={`/book?service=${encodeURIComponent(service.name)}`} className="w-full md:w-auto">
                            <Button className="w-full rounded-none bg-charcoal text-ivory hover:bg-terracotta transition-colors px-6">
                              Book Now
                            </Button>
                          </Link>
                        </div>

                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
