'use client';
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Main Header Section */}
      <div className="flex justify-between items-center pt-4 px-8 md:px-12 lg:px-24 bg-[#043873] text-white w-[100%] h-[90px]">
        
        {/* Logo Section */}
        <div className="flex gap-3 items-center">
          <Image
            src="/img/logo/logo.png"
            alt="Logo"
            width={191}
            height={34}
          />
        </div>

        {/* Navigation Links (Desktop) */}
        <nav>
          <ul className="hidden xl:flex justify-between gap-6 px-8 text-lg">
            <li className="navlinks">Products</li>
            <li className="navlinks">Solutions</li>
            <li className="navlinks">Resources</li>
            <li className="navlinks">Pricing</li>
          </ul>
        </nav>

        {/* Header Actions (Buttons and Hamburger Icon) */}
        <div className="flex gap-8 px-8">
          {/* Hamburger Icon for Mobile */}
          <button
            className="xl:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Image
              src="/img/btn.png"
              alt="bars"
              width={24}
              height={24}
            />
          </button>

          {/* Desktop Buttons (Login and Try Free) */}
          <div className="hidden xl:flex gap-8">
            <button className="bg-[#FFE492] px-5 py-2 rounded-md text-[#222222] font-bold">
              Login
            </button>
            <button className="bg-[#4F9CF9] px-5 py-2 rounded-md font-medium">
              Try Writepace Free
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#043873] text-white w-[75%] md:w-[50%] z-50 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-8 py-4">
          <Image
            src="/img/logo/logo.png"
            alt="Logo"
            width={150}
            height={30}
          />
          <button
            className="text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            X
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <nav>
          <ul className="flex flex-col gap-6 px-8 mt-8 text-lg">
            <li className="navlinks">Products</li>
            <li className="navlinks">Solutions</li>
            <li className="navlinks">Resources</li>
            <li className="navlinks">Pricing</li>
          </ul>
        </nav>

        {/* Sidebar Action Buttons */}
        <div className="flex flex-col gap-4 px-8 mt-8">
          <button className="bg-[#FFE492] px-5 py-2 rounded-md text-[#222222] font-bold">
            Login
          </button>
          <button className="bg-[#4F9CF9] px-5 py-2 rounded-md font-medium">
            Try Writepace Free
          </button>
        </div>
      </div>
    </>
  );
}
