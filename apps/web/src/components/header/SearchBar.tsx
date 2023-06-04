import { ConfigProvider, DatePicker } from 'antd'
import React from 'react'
import { MdCalendarMonth, MdPeople } from 'react-icons/md'

const { RangePicker } = DatePicker

export default function SearchBar() {
  return (
    <div className="header-searchbar-main">
      <div className="header-search">
        <div>
          <input
            defaultValue="Kempinski Hotel, Jakarta Pusat"
            className="h-full w-full mr-1 focus:outline-none"
          ></input>
        </div>
        <div>
          <span>
            <MdCalendarMonth className="text-teal-600 w-6 h-6" />
          </span>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#0d9488',
              },
            }}
          >
            <RangePicker
              allowClear={false}
              className="hidden md:flex"
              format="DD-MM-YYYY"
              size="large"
              separator="-"
              placeholder={['Check In', 'Check Out']}
              style={{ width: '100%' }}
            />
            <DatePicker
              allowClear={false}
              className="flex md:hidden"
              format="DD-MM-YYYY"
              placeholder="Check In"
            />
            <div className="flex md:hidden text-gray-300 text-lg">|</div>
            <DatePicker
              allowClear={false}
              className="hero-date-picker flex md:hidden"
              format="DD-MM-YYYY"
              placeholder="Check Out"
            />
          </ConfigProvider>
        </div>
        <div>
          <MdPeople className="text-brand-500 w-6 h-6" />
          <input
            type="number"
            name="guest"
            id="guest"
            placeholder="Guest"
            className="w-full p-2 lg:rounded-l-md rounded-none focus:outline-none bg-transparent"
          />
        </div>
      </div>
      <div className="header-search-icon">
        <div className="header-search-absolute"></div>
        <button className="header-search-absolute"></button>
      </div>
    </div>
  )
}
