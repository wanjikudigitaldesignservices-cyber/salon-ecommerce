export const mockProducts = [
  {
    id: '1',
    name: 'Hydrating Argan Oil Serum',
    slug: 'hydrating-argan-oil-serum',
    description: 'A luxurious hair serum that restores shine and softness.',
    price: 3500,
    images: ['https://images.unsplash.com/photo-1599305090598-fe179d501227?w=500&q=80'],
    category_type: 'beauty_product',
    in_stock: true,
    attributes: {}
  },
  {
    id: '2',
    name: 'Revitalizing Rosewater Mist',
    slug: 'revitalizing-rosewater-mist',
    description: 'Refreshing facial mist for a quick hydration boost.',
    price: 2200,
    images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80'],
    category_type: 'beauty_product',
    in_stock: true,
    attributes: {}
  },
  {
    id: '3',
    name: 'Deep Conditioning Hair Mask',
    slug: 'deep-conditioning-hair-mask',
    description: 'Intense moisture therapy for damaged and color-treated hair.',
    price: 4500,
    images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80'],
    category_type: 'beauty_product',
    in_stock: true,
    attributes: {}
  },
  {
    id: '4',
    name: 'Premium Brazilian Body Wave',
    slug: 'premium-brazilian-body-wave',
    description: '100% Human Hair, full cuticle aligned. Soft, bouncy, and tangle-free.',
    price: 15000,
    images: ['https://images.unsplash.com/photo-1595476108010-b4d1f10a5144?w=500&q=80'],
    category_type: 'wig',
    in_stock: true,
    attributes: { length: '20in', texture: 'Body Wave', density: '150%' }
  },
  {
    id: '5',
    name: 'Sleek Straight Lace Frontal Wig',
    slug: 'sleek-straight-lace-frontal-wig',
    description: 'Pre-plucked hairline with transparent lace for a seamless melt.',
    price: 22000,
    images: ['https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&q=80'],
    category_type: 'wig',
    in_stock: true,
    attributes: { length: '24in', texture: 'Straight', density: '180%' }
  }
];

export const mockServices = [
  { id: 's1', name: 'Signature Silk Press', duration: '90 min', price: 4000, category: 'Hair', image: '/services/silk_press.jpg' },
  { id: 's2', name: 'Balayage & Color Correction', duration: '180 min', price: 8500, category: 'Hair', image: '/services/balayage.jpg' },
  { id: 's3', name: 'Knotless Box Braids (Medium)', duration: '240 min', price: 3500, category: 'Hair', image: '/services/braids.jpg' },
  { id: 's4', name: 'Premium Wig Installation', duration: '120 min', price: 3000, category: 'Hair', image: '/services/wig.jpg' },
  { id: 's5', name: 'Locs Retwist & Style', duration: '90 min', price: 2500, category: 'Hair', image: '/services/locs.jpg' },
  { id: 's6', name: 'Luxury Spa Pedicure', duration: '60 min', price: 2500, category: 'Nails', image: '/services/pedicure.jpg' },
  { id: 's7', name: 'Flawless Gel Manicure', duration: '45 min', price: 1500, category: 'Nails', image: '/services/manicure.jpg' },
  { id: 's8', name: 'HydraFacial Treatment', duration: '60 min', price: 6500, category: 'Skin', image: '/services/facial.jpg' },
  { id: 's9', name: 'Deep Tissue Massage', duration: '60 min', price: 5000, category: 'Spa', image: '/services/massage.jpg' }
];

export const mockTestimonials = [
  { id: 't1', client_name: 'Sarah M.', quote: 'The best silk press I have ever had. My hair feels incredibly healthy and bouncy.', rating: 5 },
  { id: 't2', client_name: 'Anita K.', quote: 'Their wig installation is flawless. The lace melted perfectly and lasted weeks.', rating: 5 },
  { id: 't3', client_name: 'Joy W.', quote: 'A truly luxurious experience from the moment you walk in. Highly recommend the HydraFacial.', rating: 5 }
];

export const mockGallery = [
  { id: 'g1', image_url: 'https://images.unsplash.com/photo-1521590832167-7bfc17484d20?w=800&q=80', category: 'interior' },
  { id: 'g2', image_url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80', category: 'hair' },
  { id: 'g3', image_url: 'https://images.unsplash.com/photo-1516975080661-46bfa20281ae?w=800&q=80', category: 'hair' },
  { id: 'g4', image_url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80', category: 'nails' }
];
