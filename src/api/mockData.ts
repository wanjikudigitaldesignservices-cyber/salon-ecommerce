export const mockProducts = [
  // Wigs & Hair Extensions
  { id: 'w1', name: '100% Human Hair Lace Front Wig (Straight & Wavy)', slug: 'human-hair-lace-front-wig', description: 'Premium quality, cuticle-aligned human hair wig.', price: 18000, images: ['https://images.unsplash.com/photo-1595476108010-b4d1f10a5144?w=500&q=80'], category_type: 'wig', in_stock: true, attributes: {} },
  { id: 'w2', name: 'Synthetic Braiding Hair Packs (Various Colors)', slug: 'synthetic-braiding-hair', description: 'High quality synthetic hair for beautiful, long-lasting braids.', price: 600, images: ['https://images.unsplash.com/photo-1605980776566-0486c3ac7617?w=500&q=80'], category_type: 'wig', in_stock: true, attributes: {} },
  { id: 'w3', name: 'Clip-in Volume Hair Extensions', slug: 'clip-in-volume-extensions', description: 'Instantly add volume and length with these seamless clip-ins.', price: 3500, images: ['https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&q=80'], category_type: 'wig', in_stock: true, attributes: {} },
  { id: 'w4', name: 'Pre-Plucked Curly Bob Wig', slug: 'pre-plucked-curly-bob', description: 'Bouncy, soft curls on a pre-plucked lace frontal.', price: 12000, images: ['https://images.unsplash.com/photo-1595476108010-b4d1f10a5144?w=500&q=80'], category_type: 'wig', in_stock: true, attributes: {} },
  { id: 'w5', name: 'Afro Kinky Bulk Hair for Twists', slug: 'afro-kinky-bulk-hair', description: 'Perfect texture for natural-looking twists and locs.', price: 1200, images: ['https://images.unsplash.com/photo-1605980776566-0486c3ac7617?w=500&q=80'], category_type: 'wig', in_stock: true, attributes: {} },
  { id: 'w6', name: 'Drawstring Ponytail Extensions', slug: 'drawstring-ponytail', description: 'Quick and easy drawstring ponytail for a sleek updo.', price: 2500, images: ['https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&q=80'], category_type: 'wig', in_stock: true, attributes: {} },

  // Hair Foods & Treatments
  { id: 'h1', name: 'Nourishing Herbal Hair Food', slug: 'herbal-hair-food', description: 'Promotes hair growth and soothes the scalp.', price: 450, images: ['https://images.unsplash.com/photo-1599305090598-fe179d501227?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 'h2', name: '100% Pure Raw Shea Butter', slug: 'raw-shea-butter', description: 'Unrefined shea butter for intense moisture.', price: 800, images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 'h3', name: 'Jamaican Black Castor Oil Growth Serum', slug: 'jbco-growth-serum', description: 'Stimulates hair follicles for thicker, longer hair.', price: 1500, images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 'h4', name: 'Deep Conditioning Cholesterol Treatment', slug: 'cholesterol-treatment', description: 'Repairs damaged and over-processed hair.', price: 950, images: ['https://images.unsplash.com/photo-1599305090598-fe179d501227?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 'h5', name: 'Firm Hold Edge Control Gel', slug: 'edge-control-gel', description: 'Keeps edges sleek and smooth all day without flaking.', price: 600, images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 'h6', name: 'Anti-Dandruff Scalp Soothing Spray', slug: 'scalp-soothing-spray', description: 'Relieves itchiness and prevents dandruff flakes.', price: 750, images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },

  // Skin Care & Body
  { id: 's1', name: 'Vitamin C Brightening Face Serum', slug: 'vitamin-c-serum', description: 'Fades dark spots and gives a radiant glow.', price: 2200, images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 's2', name: 'Rich Cocoa Hydrating Body Butter', slug: 'cocoa-body-butter', description: 'Deep hydration with a delicious cocoa scent.', price: 1200, images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 's3', name: 'Exfoliating Brown Sugar Body Scrub', slug: 'brown-sugar-scrub', description: 'Removes dead skin cells for smooth, glowing skin.', price: 1000, images: ['https://images.unsplash.com/photo-1599305090598-fe179d501227?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 's4', name: 'Daily SPF 50 Broad Spectrum Sunscreen', slug: 'daily-sunscreen', description: 'Protects against UVA and UVB rays without a white cast.', price: 1800, images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 's5', name: 'Gentle Foaming Facial Cleanser', slug: 'foaming-cleanser', description: 'Cleanses without stripping the skin of natural oils.', price: 950, images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 's6', name: 'Rosewater Hydrating Facial Toner', slug: 'rosewater-toner', description: 'Balances skin pH and tightens pores.', price: 700, images: ['https://images.unsplash.com/photo-1599305090598-fe179d501227?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },

  // Perfumes & Fragrances
  { id: 'p1', name: 'Signature Floral Eau de Parfum', slug: 'floral-eau-de-parfum', description: 'A long-lasting, elegant floral fragrance.', price: 3500, images: ['https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 'p2', name: 'Vanilla & Sweet Amber Body Mist', slug: 'vanilla-body-mist', description: 'A light, sweet everyday body mist.', price: 1500, images: ['https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 'p3', name: 'Travel-Sized Roll-on Perfume Oils', slug: 'roll-on-perfume', description: 'Convenient pocket-sized fragrance for on-the-go.', price: 500, images: ['https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 'p4', name: 'Refreshing Citrus Hair Perfume', slug: 'citrus-hair-perfume', description: 'Keeps your hair smelling fresh all day.', price: 1200, images: ['https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 'p5', name: 'Oud & Sandalwood Evening Fragrance', slug: 'oud-evening-fragrance', description: 'A deep, rich, and mysterious scent for the evening.', price: 4000, images: ['https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },

  // Makeup & Cosmetics
  { id: 'm1', name: 'Long-Lasting Matte Liquid Lipstick', slug: 'matte-liquid-lipstick', description: 'Smudge-proof, highly pigmented matte finish.', price: 850, images: ['https://images.unsplash.com/photo-1596462502278-27bf85033e5a?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 'm2', name: 'Flawless Finish Liquid Foundation', slug: 'liquid-foundation', description: 'Buildable coverage for a smooth, natural look.', price: 2500, images: ['https://images.unsplash.com/photo-1596462502278-27bf85033e5a?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 'm3', name: 'Waterproof Lengthening Mascara', slug: 'waterproof-mascara', description: 'Volumizes and lengthens lashes without clumping.', price: 950, images: ['https://images.unsplash.com/photo-1596462502278-27bf85033e5a?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 'm4', name: 'All-Day Makeup Setting Spray', slug: 'makeup-setting-spray', description: 'Locks in makeup for up to 16 hours.', price: 1200, images: ['https://images.unsplash.com/photo-1596462502278-27bf85033e5a?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 'm5', name: 'HD Concealer Palette', slug: 'hd-concealer-palette', description: 'Color corrects and conceals blemishes perfectly.', price: 1500, images: ['https://images.unsplash.com/photo-1596462502278-27bf85033e5a?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 'm6', name: 'Premium Beauty Sponge & Brush Set', slug: 'beauty-sponge-brush-set', description: 'Professional tools for flawless makeup application.', price: 1800, images: ['https://images.unsplash.com/photo-1590159763121-7c91350a41f3?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },

  // Beauty Tools & Accessories
  { id: 'a1', name: 'Reversible Satin Sleep Bonnets', slug: 'satin-sleep-bonnet', description: 'Protects hair from breakage and retains moisture overnight.', price: 450, images: ['https://images.unsplash.com/photo-1619864299388-c7ef5abebdf8?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 'a2', name: 'Lace Wig Adhesive Glue & Remover Kit', slug: 'wig-adhesive-kit', description: 'Strong hold glue and gentle remover for lace wigs.', price: 1500, images: ['https://images.unsplash.com/photo-1599305090598-fe179d501227?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 'a3', name: 'Electric Heated Styling Comb', slug: 'electric-styling-comb', description: 'Straightens roots and edges easily.', price: 3500, images: ['https://images.unsplash.com/photo-1590159763121-7c91350a41f3?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 'a4', name: 'Wide-Tooth Detangling Brush', slug: 'detangling-brush', description: 'Gently removes knots without pulling hair.', price: 350, images: ['https://images.unsplash.com/photo-1590159763121-7c91350a41f3?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 'a5', name: 'Microfiber Hair Drying Towel', slug: 'microfiber-towel', description: 'Reduces frizz and dries hair quickly.', price: 600, images: ['https://images.unsplash.com/photo-1619864299388-c7ef5abebdf8?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} },
  { id: 'a6', name: 'Silk Scrunchie Sets', slug: 'silk-scrunchies', description: 'Gentle on hair, prevents creases and breakage.', price: 300, images: ['https://images.unsplash.com/photo-1619864299388-c7ef5abebdf8?w=500&q=80'], category_type: 'beauty_product', in_stock: true, attributes: {} }
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
