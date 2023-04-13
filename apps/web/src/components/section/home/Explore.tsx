import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

import { EXPLORE_BREAKPOINTS, EXPLORE_SLIDE } from '@/config/constants'

import 'swiper/css'

export default function Explore() {
  return (
    <section className='py-12 md:py-12  lg:py-16 relative'>
      <h2 className='px-6 lg:px-8 text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6'>
        Explore Destinations
      </h2>
      <div className='relative wrapper-explore-swiper group px-6 lg:px-8'>
        <Swiper
          breakpoints={EXPLORE_BREAKPOINTS}
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          slidesPerView={1}
          spaceBetween={8}
        >
          {EXPLORE_SLIDE.map((slide) => (
            <SwiperSlide key={slide.id} className='bg-white relative rounded'>
              <img
                src={slide.img}
                alt={slide.name}
                className='object-cover object-center w-full h-72 lg:h-96 rounded-md'
              />
              <div className='absolute inset-0 bg-black bg-opacity-30 rounded-md flex items-end p-5'>
                <h1 className='text-white text-xl lg:text-2xl capitalize'>
                  {slide.name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className='swiper-button-prev'>
          <GoChevronLeft className='w-6 h-6' />
        </button>
        <button className='swiper-button-next'>
          <GoChevronRight className='w-6 h-6' />
        </button>
      </div>
    </section>
  )
}
