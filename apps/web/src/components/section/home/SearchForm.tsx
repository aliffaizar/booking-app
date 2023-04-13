import { ConfigProvider, DatePicker } from 'antd'

import { MdLocationOn, MdCalendarMonth, MdPeople } from 'react-icons/md'

const { RangePicker } = DatePicker

export default function SearchForm() {
  return (
    <div
      slot='container-end'
      className='absolute z-10 inset-0 w-full h-full p-6 lg:p-8 lg:pb-24 flex flex-row items-center lg:items-end justify-center'
    >
      <div className='bg-white rounded-md p-6 lg:p-8 w-full lg:max-w-6xl'>
        <div className='mb-6 lg:mb-8'>
          <h1 className='text-2xl lg:text-3xl font-bold capitalize'>
            Find The Your Best Place
          </h1>
        </div>
        <form className='w-full flex flex-col lg:flex-row bg-gray-200 rounded-md lg:rounded-r-none'>
          <label
            htmlFor='location'
            className='bg-transparent py-2 flex items-center px-2 w-full border-b border-gray-300 lg:border-b-0 lg:border-r'
          >
            <MdLocationOn className='text-brand-500 w-6 h-6' />
            <input
              type='text'
              name='location'
              id='location'
              placeholder='Location'
              className='w-full p-2 lg:rounded-l-md rounded-none focus:outline-none bg-transparent'
            />
          </label>
          <div className='bg-transparent py-2 flex items-center px-2 w-full border-b border-gray-300 lg:border-b-0 lg:border-r'>
            <span>
              <MdCalendarMonth className='text-brand-500 w-6 h-6' />
            </span>

            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#00BCD0',
                },
              }}
            >
              <RangePicker
                allowClear={false}
                className='hero-date-picker hidden md:flex'
                format='DD-MM-YYYY'
                size='large'
                separator='-'
                placeholder={['Check In', 'Check Out']}
                style={{ width: '100%' }}
              />
              <DatePicker
                allowClear={false}
                className='hero-date-picker flex md:hidden'
                format='DD-MM-YYYY'
                placeholder='Check In'
              />
              <div className='flex md:hidden text-gray-300 text-lg'>|</div>
              <DatePicker
                allowClear={false}
                className='hero-date-picker flex md:hidden'
                format='DD-MM-YYYY'
                placeholder='Check Out'
              />
            </ConfigProvider>
          </div>
          <label
            htmlFor='guest'
            className='bg-transparent py-2 flex items-center px-2 w-full'
          >
            <MdPeople className='text-brand-500 w-6 h-6' />
            <input
              type='number'
              name='guest'
              id='guest'
              placeholder='Guest'
              className='w-full p-2 lg:rounded-l-md rounded-none focus:outline-none bg-transparent'
            />
          </label>
          <button className='bg-brand-500 text-white w-full p-3 lg:rounded-r-md rounded-none'>
            Search
          </button>
        </form>
      </div>
    </div>
  )
}
