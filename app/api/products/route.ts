import { NextResponse } from 'next/server'
import { getProducts } from '@/api/supabase'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')

  try {
    // If we have a category, filter by it, otherwise get all
    const products = await getProducts(category as "wig" | "beauty_product" | undefined)
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}
