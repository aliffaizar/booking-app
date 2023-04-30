import Explore from '@/components/section/home/Explore'
import Hero from '@/components/section/home/Hero'
import Listing from '@/components/section/home/Listing'

export default function Home() {
  return (
    <div className='-mt-16'>
      <Hero />
      <Explore />
      <Listing />
    </div>
  )
}
