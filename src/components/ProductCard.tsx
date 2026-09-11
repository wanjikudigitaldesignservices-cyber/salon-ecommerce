import { Link } from 'react-router-dom'
import { useCartStore } from '@/store/cartStore'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { toast } from 'sonner'
import { ShoppingBag } from 'lucide-react'

interface ProductProps {
  product: {
    id: string
    name: string
    slug: string
    price: number
    images: string[]
    category_type: string
    attributes?: Record<string, string>
  }
}

export function ProductCard({ product }: ProductProps) {
  const addItem = useCartStore(state => state.addItem)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.images[0]
    })
    toast.success(`${product.name} added to cart`, {
      description: `Quantity: 1 • KES ${product.price.toLocaleString()}`
    })
  }

  const isWig = product.category_type === 'wig'

  return (
    <Link to={isWig ? `/wigs/${product.slug}` : `/shop/${product.slug}`} className="group">
      <Card className="rounded-none border-border overflow-hidden bg-white shadow-sm transition-all hover:shadow-md h-full flex flex-col">
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <CardContent className="p-5 flex flex-col flex-grow">
          <h3 className="font-serif font-semibold text-charcoal text-lg mb-1 line-clamp-2">
            {product.name}
          </h3>
          
          {isWig && product.attributes && (
            <p className="text-xs text-charcoal/60 mb-3 uppercase tracking-wider">
              {product.attributes.length} • {product.attributes.texture}
            </p>
          )}
          
          <div className="mt-auto pt-4 flex items-center justify-between">
            <span className="font-medium text-charcoal">
              KES {product.price.toLocaleString()}
            </span>
            <Button 
              size="icon" 
              variant="outline" 
              className="rounded-full border-charcoal/20 hover:bg-terracotta hover:text-ivory hover:border-terracotta transition-colors"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="sr-only">Add to Cart</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
