'use client';

import Image from 'next/image'
// import Link from 'next/link'
import { HomeIcon, FireIcon, UserIcon } from '@heroicons/react/24/solid';
import { Navbar,NavbarMenuToggle, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { NavbarMenu, NavbarMenuItem } from "@heroui/react";

import {useState} from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {label:"Home", icon:HomeIcon, href:"/"},
    {label:"Temple Gallery", icon:HomeIcon, href:"/gallery"},
    {label:"Homams", icon:FireIcon, href:"/homams"},
    // {label:"Donors", icon:UserIcon, href:"/donors"},
    {label:"Contact Us", icon:UserIcon, href:"/contact"}
  ];

  return (
    <Navbar isBordered className="bg-red-800" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand justify="end">
        <Image src="/logo.jpg" alt="Logo" width={62} height={62} />
      </NavbarBrand>
      </NavbarContent>
      
      <NavbarContent className="hidden sm:flex gap-1" justify="start">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link href={item.href} className="text-white hover:text-gray-900 px-3 py-2 flex items-center">
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="w-full border-b border-gray-300"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}