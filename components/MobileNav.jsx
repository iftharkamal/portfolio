"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci"


const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Resume",
      path: "/resume",
    },
    {
      name: "Work",
      path: "/work",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    
  ];

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
            {/* logo */}
        <div className="text-center text-2xl mt-32 mb-40">
            <Link href='/'>
            <h1 className="text-4xl font-semibold">Ifthar <span className="text-accent">.</span></h1>
            </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col gap-8 justify-center items-center">
            {links.map((link,index) =>{
                return <Link href={link.path} key={index} className={`text-xl capitalize hover:text-accent transition-all ${link.path === pathname && 'text-accent border-b-2 border-accent'}`}>
                    {link.name}
                    </Link>
            })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
