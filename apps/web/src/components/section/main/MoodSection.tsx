import React from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

import { EXPLORE_BREAKPOINTS } from '@/config/constants'

interface DataProps {
  id: number
  img: string
  name: string
}

interface MoodSectionProps {
  title: string
  imgHeader: number
  data: DataProps[]
}

export default function MoodSection({
  title,
  imgHeader,
  data,
}: MoodSectionProps) {
  return (
    <div className="w-full pb-8">
      <div className="w-full wrapper-explore-swiper group flex">
        <div className="relative w-4/12 border mr-2 rounded-md">
          <div className="absolute h-full w-full z-40 rounded-md bg-black opacity-70"></div>
          <div className="absolute h-full w-full z-50 text-white text-2xl font-bold flex items-center justify-center">
            {title}
          </div>
          <img
            src={data[imgHeader]['img']}
            alt={data[imgHeader]['name']}
            className="object-cover object-center w-full h-72 rounded-md"
          />
        </div>
        <Swiper
          breakpoints={EXPLORE_BREAKPOINTS}
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          slidesPerView={3}
          spaceBetween={8}
          className="relative w-8/12"
        >
          {data.map((slide) => (
            <SwiperSlide key={slide.id} className="bg-white relative rounded">
              <img
                src={slide.img}
                alt={slide.name}
                className="object-cover object-center w-full h-72 rounded-md"
              />
            </SwiperSlide>
          ))}
          <button className="absolute top-32 left-0 border bg-white z-50 swiper-button-prev opacity-50 hover:opacity-100">
            <GoChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute top-32 right-0 border bg-white z-50 swiper-button-next opacity-50 hover:opacity-100">
            <GoChevronRight className="w-6 h-6" />
          </button>
        </Swiper>
      </div>
    </div>
  )
}
