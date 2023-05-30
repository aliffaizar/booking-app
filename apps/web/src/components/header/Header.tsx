import useClickedOutside from "@/hooks/clickedOutside";
import { NavLink } from "@/lib";
import Button from "@/lib/Button";
import Card from "@/lib/Card";
import { BrandIcon, ProfileIcon } from "@/lib/Icon";
import List, { ListItem } from "@/lib/List";
import { Color } from "@/types/enum";
import { useRef, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wrapperRef: React.RefObject<HTMLDivElement> = useRef(null);

  function handleFunction() {
    isOpen && setIsOpen(false);
  }

  useClickedOutside(wrapperRef, { handleFunction });
  return (
    <header id="header">
      <div className="flex h-full w-full">
        <NavLink href="/" className="h-5/6 my-auto w-2/12 md:w-1/12">
          <BrandIcon fill={Color.Teal} />
        </NavLink>

        <div className="w-10/12"></div>
        <nav className="relative h-5/6 my-auto w-2/12 md:w-1/12 flex justify-end items-center">
          <Button
            bgColor={Color.Teal}
            width=""
            height=""
            padding="0"
            className="w-7/12 aspect-square rounded-full flex justify-center items-center"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <ProfileIcon height="90%" width="90%" fill="white" />
          </Button>
          <div
            ref={wrapperRef}
            className={`${
              isOpen ? "" : "hidden"
            } absolute top-16 z-50 bg-white border rounded-xl`}
          >
            <Card className="py-2" width="150px">
              <List className="justify-evenly">
                <ListItem className="hover:bg-teal-600 p-2">
                  <NavLink href="/">Log In / Sign Up</NavLink>
                </ListItem>
                <ListItem className="hover:bg-teal-600 p-2">
                  <NavLink href="/">Join Us</NavLink>
                </ListItem>
                <ListItem className="hover:bg-teal-600 p-2">
                  <NavLink href="/">Customer Service</NavLink>
                </ListItem>
              </List>
            </Card>
          </div>
        </nav>
      </div>
    </header>
  );
}
