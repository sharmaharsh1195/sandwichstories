'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Shailesh Patel',
      review: 'Amazing experience! The sandwiches were fresh, flavorful, and well-crafted — especially the Melting cheese grill and French Fries .The staff were friendly and attentive, and the cafe had a comfortable vibe perfect for hanging out. Definitely coming back again!',
      rating: 5,
      location: 'Surat',
      color: 'bg-yellow-100'
    },
    {
      id: 2,
      name: 'Pushpraj Jadhav',
      review: 'Love the vibe at Sandwich Stories Cafe. Super friendly staff and the service is always fast. A diverse selection of food is available at affordable prices. High hygiene standards are consistently maintained. Must visit place for the sandwich lovers.',
      rating: 5,
      location: 'Surat',
      color: 'bg-green-100'
    },
    {
      id: 3,
      name: 'Harshada Pande',
      review: 'We have been loyal customers of Sandwich Stories since day one, and we absolutely love it! The food quality is excellent, and the taste of the sandwiches is simply irresistible.❤️ The Cheese Chilli Toast is a must-try🤩 it’s my personal favorite! Highly recommend this place for its delicious food and pleasant ambiance—a perfect spot to hang out.👍🏻🫶🏻',
      rating: 5,
      location: 'Pune',
      color: 'bg-orange-100'
    },
    {
      id: 4,
      name: 'Aamir Khan',
      review: 'Yesterday, I tried the chili cheese sandwich and masala Maggie, and both were fantastic! The flavors were perfectly balanced, and the sandwich had just the right amount of spice. I highly recommend them!',
      rating: 5,
      location: 'Pune',
      color: 'bg-blue-100'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-light relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-10 left-5 text-6xl opacity-10 rotate-12">⭐</div>
      <div className="absolute bottom-10 right-5 text-6xl opacity-10 -rotate-12">💬</div>

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-dark mb-4">
            Wall of Love 💛
          </h2>
          <p className="text-lg md:text-xl font-body text-brown max-w-2xl mx-auto">
            Real stories from real foodies (straight from Google Reviews!)
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id} className="!h-auto">
                <TestimonialCard testimonial={testimonial} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-primary-yellow hover:bg-primary-orange text-dark p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
            <HiArrowLeft className="text-2xl" />
          </button>
          <button className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-primary-yellow hover:bg-primary-orange text-dark p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
            <HiArrowRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index }) {
  const getInitial = (name) => name.charAt(0).toUpperCase()

  return (
    <motion.div
      initial={{ opacity: 0, rotate: -5, y: 50 }}
      whileInView={{ opacity: 1, rotate: 0, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ rotate: 2, scale: 1.05 }}
      className="h-full w-full flex flex-col"
    >
      {/* Polaroid-style Card */}
      <div className={`${testimonial.color} p-6 rounded-2xl shadow-xl border-4 border-white relative h-full flex flex-col`}>
        {/* Pin at top */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-accent-red rounded-full shadow-md"></div>
        
        {/* Quote Icon */}
        <FaQuoteLeft className="text-primary-orange text-3xl opacity-30 mb-4" />

        {/* Review Text */}
        <p className="font-body text-dark text-base mb-6 flex-grow leading-relaxed italic">
          "{testimonial.review}"
        </p>

        {/* Star Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              viewport={{ once: true }}
            >
              <FaStar className="text-primary-orange text-xl" />
            </motion.div>
          ))}
        </div>

        {/* Customer Info */}
        <div className="flex items-center gap-3 pt-4 border-t-2 border-dark/10">
          {/* Avatar Circle */}
          <div className="w-12 h-12 bg-primary-orange text-white rounded-full flex items-center justify-center font-heading font-bold text-xl shadow-md">
            {getInitial(testimonial.name)}
          </div>
          <div>
            <h4 className="font-heading font-bold text-dark text-lg">
              {testimonial.name}
            </h4>
            <p className="font-body text-brown text-sm">
              📍 {testimonial.location}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
