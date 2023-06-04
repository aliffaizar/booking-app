import { NavLink } from '@/lib'
import { BrandIcon } from '@/lib/Icon'
import { Color } from '@/types/enum'

import SearchBar from './SearchBar'
import Profile from './Profile'

export default function Header() {
  return (
    <header id="header">
      <div className="flex items-center h-full w-full">
        <div className="header-brand">
          <NavLink href="/" className="">
            <BrandIcon width="90px" fill={Color.Teal} />
          </NavLink>
        </div>
        <div className="header-searchbar">
          <SearchBar />
        </div>
        <div className="header-profile">
          <Profile />
        </div>
      </div>
    </header>
  )
}
