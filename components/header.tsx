"use client"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Container from "./container"

const links = [
  {
    to: "/blockchains",
    label: "Blockchains",
  },
  {
    to: "/protocols",
    label: "Protocols",
  },
  {
    to: "/research",
    label: "Research",
  },
  {
    to: "https://workshop.stability.nexus",
    label: "Workshop",
  },
  {
    to: "https://hackathon.stability.nexus",
    label: "Hackathon",
  },
  {
    to: "https://news.stability.nexus/",
    label: "Articles",
  },
  {
    to: "https://docs.stability.nexus/",
    label: "Docs",
  },
  // {
  //   to: "https://docs.stability.nexus/about-us/the-stable-order",
  //   label: "About Us",
  // },
]

export default function Header() {
  const path = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(currState => !currState);
  }

  return (
    <nav className="z-10 mt-5 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent">
      <Container className="md:!px-6">
        <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0">
          <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
            {/* Logo */}
            <Link
              href="/"
              aria-label="logo"
              className="flex items-center justify-center space-x-2"
            >
              <Image
                unoptimized
                fetchPriority="high"
                loading="lazy"
                src="./logo.png"
                alt="Stability Nexus Logo"
                height={50}
                width={50}
              />
              <span className="text-2xl font-medium tracking-tight text-black">
                <span className=" text-secondary dark:text-white">Stability</span> 
                <span className="block text-primary dark:text-white">Nexus</span>
              </span>
            </Link>

            {/* Small Screen Menu Button */}
            <div className="relative flex max-h-10 items-center lg:hidden">
              <button
                aria-label="menu"
                id="menu"
                className="relative -mr-6 p-6"
                onClick={toggleMenu}
              >
                {isOpen ? (
                  <X className="size-6" />
                ) : (
                  <Menu className="size-6" />
                )}
              </button>
            </div>
          </div>

          {/* Large Screen Menu */}
          <div
            id="navlinks"
            className="invisible absolute left-0 top-full z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none"
          >
            <div className="w-full text-black dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
              <ul className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 ">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.to}
                      className={`block font-medium transition hover:text-primary dark:hover:text-white md:px-4 ${path === link.to && "font-semibold underline underline-offset-4"}`}
                    >
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Small Screen Menu */}
      <div
        className={`flex flex-col items-end lg:hidden ${isOpen ? "block" : "hidden"}`}
      >
        {links.map((link, index) => (
          <Link
            href={link.to}
            key={index}
            onClick={toggleMenu}
            className={`block w-full mr-6 py-2 text-right font-medium transition hover:text-primary dark:hover:text-white md:px-4 ${path === link.to && "font-semibold underline underline-offset-4"}`}
          >
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
