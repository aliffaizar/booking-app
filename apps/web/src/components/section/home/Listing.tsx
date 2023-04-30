import HotelCard from '@/components/Card/HotelCard'

export default function Listing() {
  return (
    <section className='p-6 lg:p-8 -mt-6 lg:-mt-8'>
      <div className='flex justify-between items-center'>
        <h3 className='text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6'>
          Popular Hotel
        </h3>
      </div>
      <div className='card-wrapper'>
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </div>
    </section>
  )
}
