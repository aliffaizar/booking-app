import { EXPLORE_SLIDE } from '@/config/constants'
import 'swiper/css'
import MoodSection from './MoodSection'

export default function Mood() {
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
