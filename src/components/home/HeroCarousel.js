'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

export default function HeroCarousel() {
  const slides = [
    {
      id: 1,
      title: 'Our Signature Club Sandwich',
      subtitle: 'Loaded with fresh veggies & flavor',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=1200&q=80',
      bgColor: 'bg-primary-yellow'
    },
    {
      id: 2,
      title: '50% Off on All Burgers!',
      subtitle: 'Limited time offer - Order now',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=80',
      bgColor: 'bg-accent-red'
    },
    {
      id: 3,
      title: 'Try Our Paneer Special',
      subtitle: 'Grilled to perfection with Indian spices',
      image: 'https://images.unsplash.com/photo-1619740455993-432ab4e232e3?w=1200&q=80',
      bgColor: 'bg-accent-green'
    },
    {
      id: 4,
      title: 'Fresh. Fast. Flavorful.',
      subtitle: 'Every sandwich tells a story',
      image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=1200&q=80',
      bgColor: 'bg-primary-orange'
    }
  ]

  return (
    <div className="relative h-[500px] md:h-[600px]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active-custom',
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`relative h-full ${slide.bgColor} flex items-center justify-center overflow-hidden`}>
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  filter: 'brightness(0.6)'
                }}
              />
              
              {/* Content */}
              <div className="relative z-10 text-center text-white px-4 container-custom">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl font-body mb-8 drop-shadow-md">
                  {slide.subtitle}
                </p>
                <button className="bg-accent-red hover:bg-red-600 text-white font-heading font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Order Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active-custom {
          opacity: 1;
          background: #FFC107;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  )
}
