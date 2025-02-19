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
    {label:"Homams", icon:FireIcon, href:"/homams"},
    {label:"Donors", icon:UserIcon, href:"/donors"},
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
        <NavbarItem>
          <Link href="/" className="text-white hover:text-gray-900 px-3 py-2 flex items-center">
            <HomeIcon className="h-5 w-5 mr-1" />
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/homams" className="text-white hover:text-gray-900 px-3 py-2 flex items-center">
            <FireIcon className="h-5 w-5 mr-1" />
            Homams
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/donors" className="text-white hover:text-gray-900 px-3 py-2 flex items-center">
            <UserIcon className="h-5 w-5 mr-1" />
            Donors
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact" className="text-white hover:text-gray-900 px-3 py-2 flex items-center">
            <UserIcon className="h-5 w-5 mr-1" />
            Contact Us
          </Link>
        </NavbarItem>
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