import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductBySlug } from '@/api/supabase'
import { useCartStore } from '@/store/cartStore'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { ArrowLeft, Minus, Plus } from 'lucide-react'

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  
  const addItem = useCartStore(state => state.addItem)

  useEffect(() => {
    async function fetchProduct() {
      if (!slug) return
      setLoading(true)
      try {
        const data = await getProductBySlug(slug)
        setProduct(data)
      } catch (error) {
        console.error("Product not found", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [slug])

  if (loading) {
    return <div className="min-h-screen bg-ivory flex items-center justify-center animate-pulse text-charcoal/50">Loading...</div>
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex flex-col items-center justify-center text-charcoal">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Button variant="outline" onClick={() => navigate(-1)} className="rounded-none">Go Back</Button>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.images[0],
      attributes: product.attributes
    })
    toast.success(`${product.name} added to cart`, {
      description: `Quantity: ${quantity} • Total: KES ${(product.price * quantity).toLocaleString()}`
    })
  }

  return (
    <div className="bg-ivory min-h-screen pb-24 pt-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-charcoal/60 hover:text-charcoal transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Image Gallery */}
          <div className="aspect-[4/5] bg-white border border-border overflow-hidden">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col pt-4 md:pt-12">
            <h1 className="font-serif text-4xl text-charcoal mb-4">{product.name}</h1>
            <p className="text-2xl text-terracotta font-medium mb-8">KES {product.price.toLocaleString()}</p>
            
            <div className="prose prose-charcoal max-w-none mb-8 text-charcoal/80">
              <p>{product.description}</p>
            </div>

            {/* Attributes Table for Wigs */}
            {product.category_type === 'wig' && product.attributes && Object.keys(product.attributes).length > 0 && (
              <div className="mb-8 border border-border bg-white p-6">
                <h3 className="font-serif font-bold text-lg mb-4 border-b border-border pb-2">Specifications</h3>
                <dl className="space-y-3 text-sm">
                  {Object.entries(product.attributes).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center border-b border-border/50 pb-2 last:border-0 last:pb-0">
                      <dt className="text-charcoal/60 capitalize">{key}</dt>
                      <dd className="font-medium text-charcoal">{String(value)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <div className="mt-auto">
              <div className="flex items-center gap-6 mb-6">
                <span className="font-serif text-charcoal font-bold">Quantity</span>
                <div className="flex items-center border border-charcoal rounded-none">
                  <button 
                    className="p-3 hover:bg-charcoal/5 transition-colors disabled:opacity-50"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button 
                    className="p-3 hover:bg-charcoal/5 transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full rounded-none bg-charcoal text-ivory hover:bg-terracotta transition-colors h-14 text-lg"
                onClick={handleAddToCart}
                disabled={!product.in_stock}
              >
                {product.in_stock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
