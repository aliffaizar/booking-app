import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { HERO_SLIDE } from '@/config/constants'

import 'swiper/css'
import 'swiper/css/pagination'
import SearchForm from './SearchForm'

export default function Hero() {
  return (
    <div className='relative h-screen w-full'>
      <Swiper
        className='slide-hero'
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
      >
        {HERO_SLIDE.map((slide) => (
          <SwiperSlide key={slide.id}>
            <span className='absolute inset-0 z-0 bg-black/25'></span>
            <img
              className='object-cover object-center -z-10 h-full w-full'
              src={slide.img}
              alt={slide.alt}
            />
          </SwiperSlide>
        ))}
        <SearchForm />
      </Swiper>
    </div>
  )
}
