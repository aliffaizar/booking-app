import Mood from '@/components/section/main/Mood'
import Recommendation from '@/components/section/main/Recommendation'

export default function Home() {
  return (
    <div id="home">
      <Recommendation />
      <Mood />
    </div>
  )
}
