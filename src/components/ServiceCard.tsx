import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Clock } from 'lucide-react'

interface ServiceProps {
  service: {
    id: string
    name: string
    duration: string
    price: number
    category: string
  }
}

export function ServiceCard({ service }: ServiceProps) {
  return (
    <Card className="rounded-none border-border bg-ivory shadow-sm transition-shadow hover:shadow-md h-full flex flex-col">
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-serif font-semibold text-charcoal text-xl leading-tight pr-4">
            {service.name}
          </h3>
          <span className="font-medium text-terracotta whitespace-nowrap">
            KES {service.price.toLocaleString()}
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-charcoal/60 mb-8 mt-auto">
          <Clock className="h-4 w-4" />
          <span>{service.duration}</span>
        </div>
        
        <Link to={`/book?service=${encodeURIComponent(service.name)}`} className="mt-auto block w-full">
          <Button variant="outline" className="w-full rounded-none border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory transition-colors">
            Book This Service
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
