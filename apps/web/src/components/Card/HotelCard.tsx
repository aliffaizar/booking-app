import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'

export default function HotelCard() {
  return (
    <div className='card group'>
      <div className='card-image'>
        <img src='/images/hero/1.jpg' alt='hotel-1' />
        <div className='absolute inset-0 bg-black/10 flex justify-end items-start p-4'>
          <button className='hidden group-hover:block'>
            <AiOutlineHeart className='w-6 h-6 text-white transition ease-in-out delay-100 duration-200' />
          </button>
        </div>
      </div>
      <div className='card-content'>
        <Link
          className='text-gray-900 text-lg md:text-xl font-semibold hover:text-brand-500'
          href='/'
        >
          <h1>Hotel 1</h1>
        </Link>
      </div>
    </div>
  )
}
