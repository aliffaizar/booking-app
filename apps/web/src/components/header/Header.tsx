import { NavLink } from "@/lib";
import { BrandIcon, ProfileIcon } from "@/lib/Icon";
import { Color } from "@/types/enum";
import { Menu } from "@headlessui/react";
import Link from "next/link";

interface MenuProps {
  id: number;
  name: string;
  href: string;
}

export default function Header() {
  const menuItem: MenuProps[] = [
    { id: 1, name: "Log In / Sign Up", href: "/" },
    { id: 2, name: "Join Us", href: "/" },
    { id: 3, name: "Customer Service", href: "/" },
  ];
  return (
    <header id="header">
      <div className="flex h-full w-full">
        <NavLink href="/" className="h-5/6 my-auto w-2/12 md:w-1/12">
          <BrandIcon fill={Color.Teal} />
        </NavLink>

        <div className="w-10/12 z-50"></div>
        <div className="relative h-5/6 my-auto w-2/12 md:w-1/12">
          <Menu as="div" className="text-left">
            <div className="w-full flex justify-end">
              <Menu.Button className="w-7/12 aspect-square rounded-full my-auto flex justify-center items-center bg-teal-600 max-lg:w-8/12 max-md:w-7/12">
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
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {menu.name}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </header>
  );
}
