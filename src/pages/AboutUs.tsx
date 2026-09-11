import { motion } from 'framer-motion'

export default function AboutUs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const salonName = import.meta.env.VITE_SALON_NAME || 'The Modern Salon'

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Hero */}
      <div className="relative h-80 bg-charcoal text-ivory flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bfc17484d20?q=80&w=2070" 
            alt="Salon interior" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-5xl mb-4">About Us</h1>
          <p className="text-ivory/80 max-w-lg mx-auto">The story behind {salonName}.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl mt-16">
        {/* Mission */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-20"
        >
          <h2 className="font-serif text-4xl text-charcoal mb-6">Our Story</h2>
          <div className="space-y-5 text-charcoal/80 leading-relaxed text-lg">
            <p>
              Founded in the heart of Kilimani, Nairobi, {salonName} was born from a passion for 
              modern beauty and the belief that everyone deserves to feel extraordinary. We blend 
              precision techniques with a warm, welcoming atmosphere to create an experience that 
              goes beyond a simple salon visit.
            </p>
            <p>
              Our team of expert stylists and beauty professionals are dedicated to staying at the 
              forefront of global beauty trends while honouring the unique textures and styles that 
              make each client individual.
            </p>
          </div>
        </motion.section>

        {/* Values */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-20"
        >
          <h2 className="font-serif text-4xl text-charcoal mb-10">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Precision', desc: 'Every cut, every colour, every treatment is executed with meticulous attention to detail.' },
              { title: 'Quality', desc: 'We use only premium, salon-grade products that nourish and protect your hair and skin.' },
              { title: 'Experience', desc: 'From the moment you walk in, every touchpoint is designed to feel luxurious and personal.' },
            ].map(v => (
              <div key={v.title} className="bg-white border border-border p-8">
                <h3 className="font-serif text-2xl text-charcoal mb-4">{v.title}</h3>
                <p className="text-charcoal/70">{v.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center py-16 border-t border-border"
        >
          <h2 className="font-serif text-3xl text-charcoal mb-4">Ready to Experience the Difference?</h2>
          <p className="text-charcoal/60 mb-8 max-w-lg mx-auto">Book your first appointment and let our team craft a look that's uniquely you.</p>
          <a href="/book" className="inline-block bg-charcoal text-ivory px-8 py-4 text-lg hover:bg-terracotta transition-colors">
            Book Now
          </a>
        </motion.section>
      </div>
    </div>
  )
}
