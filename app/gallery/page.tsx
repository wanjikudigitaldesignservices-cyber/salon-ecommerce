'use client';

import { useState, useEffect } from 'react'
import { getGallery } from '@/api/supabase'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function Gallery() {
  const [images, setImages] = useState<any[]>([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    async function loadGallery() {
      setLoading(true)
      try {
        const data = await getGallery()
        setImages(data as any[])
      } catch (error) {
        console.error("Failed to fetch gallery", error)
      } finally {
        setLoading(false)
      }
    }
    loadGallery()
  }, [])

  const categories = ['all', 'interior', 'hair', 'nails', 'wigs', 'before_after']

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter)

  return (
    <div className="bg-ivory min-h-screen pb-24 pt-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Our Portfolio</h1>
          <p className="text-charcoal/70">A glimpse into the artistry at our Kilimani studio.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-sm uppercase tracking-wider transition-colors ${
                filter === cat 
                  ? 'bg-charcoal text-ivory' 
                  : 'bg-transparent border border-border text-charcoal hover:border-charcoal'
              }`}
            >
              {cat.replace('_', ' ')}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        {loading ? (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className={`bg-border/50 animate-pulse ${i % 2 === 0 ? 'h-64' : 'h-96'}`} />
            ))}
          </div>
        ) : (
          <motion.div 
            layout
            className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
          >
            <AnimatePresence>
              {filteredImages.map(img => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group overflow-hidden cursor-pointer break-inside-avoid"
                  onClick={() => setSelectedImage(img.image_url)}
                >
                  <img 
                    src={img.image_url} 
                    alt={img.caption || 'Gallery Image'} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-rosegold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
