import 'swiper/css'
import { useEffect, useState } from 'react'
import MoodSection from './MoodSection'
import { EXPLORE_SLIDE } from '@/config/constants'

export default function Mood() {
  // // slidesPerView Swiper didn't work properly, it always shows 5 pictures even tho I set for 3 pictures only, so I use useState and useEffect to fix that
  // const [slidesPerView, setSlidePerView] = useState<number>(0)
  // useEffect(() => {
  //   setSlidePerView(3)
  // }, [slidesPerView])
  // //
  return (
    <section className="w-full relative">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6">
        Explore Destinations
      </h2>
      <MoodSection title="City Landscape" imgHeader={2} data={EXPLORE_SLIDE} />
      <MoodSection
        title="Staying & Surfing"
        imgHeader={0}
        data={EXPLORE_SLIDE}
      />
      <MoodSection
        title="Closer to Nature"
        imgHeader={1}
        data={EXPLORE_SLIDE}
      />
    </section>
  )
}
