import { ProfileIcon } from '@/lib/Icon'
import { Menu } from '@headlessui/react'
import Link from 'next/link'

interface MenuProps {
  id: number
  name: string
  href: string
}

export default function Profile() {
  const menuItem: MenuProps[] = [
    { id: 1, name: 'Log In / Sign Up', href: '/login' },
    { id: 2, name: 'Join Us', href: '/' },
    { id: 3, name: 'Customer Service', href: '/' },
  ]
  return (
    <Menu as="div" className="text-left h-full">
      <div className="h-full flex justify-end">
        <Menu.Button className="h-full aspect-square rounded-full flex justify-center items-center bg-teal-600">
          <ProfileIcon height="85%" width="85%" fill="white" />
        </Menu.Button>
      </div>
      <Menu.Items className="absolute z-50 right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-xl py-1">
        {menuItem.map((menu: MenuProps) => (
          <Menu.Item key={menu.id}>
            {({ active }) => (
              <Link
                href={menu.href}
                className={`${
                  active ? 'bg-teal-600 text-white' : 'text-gray-900'
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                {menu.name}
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}
