import { createClient } from '@supabase/supabase-js'
import { mockProducts, mockServices, mockTestimonials, mockGallery } from './mockData'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create a Supabase client only if env vars are present
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null

// API Layer Functions

export async function getProducts(type?: 'beauty_product' | 'wig') {
  if (supabase) {
    let query = supabase.from('products').select('*, product_categories!inner(*)')
    if (type) {
      query = query.eq('product_categories.type', type)
    }
    const { data, error } = await query
    if (error) throw error
    return data
  }
  
  // Mock fallback
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(type ? mockProducts.filter(p => p.category_type === type) : mockProducts)
    }, 500)
  })
}

export async function getProductBySlug(slug: string) {
  if (supabase) {
    const { data, error } = await supabase.from('products').select('*, product_categories(*)').eq('slug', slug).single()
    if (error) throw error
    return data
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts.find(p => p.slug === slug))
    }, 500)
  })
}

export async function getServices() {
  if (supabase) {
    const { data, error } = await supabase.from('services').select('*')
    if (error) throw error
    return data
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockServices), 500)
  })
}

export async function getTestimonials() {
  if (supabase) {
    const { data, error } = await supabase.from('testimonials').select('*').eq('approved', true)
    if (error) throw error
    return data
  }
  return new Promise((resolve) => resolve(mockTestimonials))
}

export async function getGallery() {
  if (supabase) {
    const { data, error } = await supabase.from('gallery_images').select('*')
    if (error) throw error
    return data
  }
  return new Promise((resolve) => resolve(mockGallery))
}

export async function createAppointmentRequest(data: any) {
  if (supabase) {
    const { error } = await supabase.from('appointment_requests').insert([data])
    if (error) throw error
    return true
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 1000)
  })
}
