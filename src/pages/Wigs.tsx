import { useState, useEffect } from 'react'
import { getProducts } from '@/api/supabase'
import { ProductCard } from '@/components/ProductCard'
import { motion } from 'framer-motion'

export default function Wigs() {
  const [wigs, setWigs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [sort, setSort] = useState('newest')

  useEffect(() => {
    async function fetchWigs() {
      setLoading(true)
      try {
        const data = await getProducts('wig')
        setWigs(data as any[])
      } catch (error) {
        console.error("Failed to fetch wigs", error)
      } finally {
        setLoading(false)
      }
    }
    fetchWigs()
  }, [])

  const sortedWigs = [...wigs].sort((a, b) => {
    if (sort === 'price-low') return a.price - b.price
    if (sort === 'price-high') return b.price - a.price
    return 0
  })

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Hero Banner */}
      <div className="relative h-80 bg-charcoal text-ivory flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1595476108010-b4d1f10a5144?q=80&w=2000" 
            alt="Premium Wigs" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-5xl mb-4">Premium Human Hair Wigs</h1>
          <p className="text-ivory/80 max-w-lg mx-auto">Flawless lace, aligned cuticles, uncompromised quality.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-28 space-y-8">
            <div>
              <h3 className="font-serif font-bold text-lg mb-4 border-b border-border pb-2">Sort By</h3>
              <select 
                className="w-full bg-white border border-border p-2 text-sm focus:outline-none focus:border-charcoal"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
            
            {/* Attributes Filters placeholder */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-4 border-b border-border pb-2">Length</h3>
              <div className="space-y-3 text-sm text-charcoal/80">
                <label className="flex items-center gap-2"><input type="checkbox" className="rounded-none accent-charcoal" /> 18 inches</label>
                <label className="flex items-center gap-2"><input type="checkbox" className="rounded-none accent-charcoal" /> 20 inches</label>
                <label className="flex items-center gap-2"><input type="checkbox" className="rounded-none accent-charcoal" /> 24 inches</label>
              </div>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-grow">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-[4/5] bg-border/50 animate-pulse" />
              ))}
            </div>
          ) : sortedWigs.length === 0 ? (
            <div className="text-center py-20 text-charcoal/60">
              <p>No wigs found.</p>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {sortedWigs.map(wig => (
                <ProductCard key={wig.id} product={wig} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
