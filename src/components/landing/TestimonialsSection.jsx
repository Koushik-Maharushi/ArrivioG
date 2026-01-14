import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Digital Nomad",
    location: "ARRIVIO Austin",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    content: "I was worried about moving to a new city alone, but ARRIVIO made it instant. I had a community of friends within 24 hours of unpacking. The common areas are actually usable for work, too!",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Software Engineer",
    location: "ARRIVIO Seattle",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    content: "The flexibility is a game changer. Being able to transfer my lease from Seattle to Austin when my project changed saved me so much stress. Plus, the internet is blazing fast.",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Graduate Student",
    location: "ARRIVIO Boston",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    content: "It's not just a room; it's a lifestyle. The weekly events are curated perfectly, and having all utilities included in one bill makes budgeting so much easier for me.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-warmSand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-forestGreen mb-4"
          >
            Stories from the Community
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal/70 font-body text-lg max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here is what it's like to live at ARRIVIO.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-softWhite p-8 rounded-2xl shadow-md border border-warmSand relative"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-8 text-warmSand/50">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 text-mutedGold">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Content */}
              <p className="text-charcoal/80 font-body leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-forestGreen/20"
                />
                <div>
                  <h4 className="font-heading font-bold text-forestGreen">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-charcoal/60 font-medium uppercase tracking-wider">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;