'use client';

import { useState, useEffect } from 'react'
import { getProducts } from '@/api/supabase'
import { ProductCard } from '@/components/ProductCard'
import { motion } from 'framer-motion'

export default function Shop() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [sort, setSort] = useState('newest')

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      try {
        const data = await getProducts()
        setProducts(data as any[])
      } catch (error) {
        console.error("Failed to fetch products", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === 'price-low') return a.price - b.price
    if (sort === 'price-high') return b.price - a.price
    return 0 // mock newest
  })

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header */}
      <div className="bg-charcoal text-ivory py-20 text-center">
        <h1 className="font-serif text-5xl mb-4">Beauty Products</h1>
        <p className="text-ivory/70 max-w-lg mx-auto">Curated skincare and haircare for your daily regimen.</p>
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
            
            {/* Filters placeholder (client side mockup) */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-4 border-b border-border pb-2">Filters</h3>
              <div className="space-y-3 text-sm text-charcoal/80">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded-none accent-charcoal" defaultChecked />
                  In Stock Only
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-grow">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="aspect-[4/5] bg-border/50 animate-pulse" />
              ))}
            </div>
          ) : sortedProducts.length === 0 ? (
            <div className="text-center py-20 text-charcoal/60">
              <p>No products found.</p>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
