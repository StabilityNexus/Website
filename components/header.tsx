"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Container from "./container"

const links = [
  {
    to: "/research",
    label: "Research",
  },
  {
    to: "https://news.stability.nexus/",
    label: "Articles",
  },
  {
    to: "https://docs.stability.nexus/",
    label: "Docs",
  },
]

export default function Header() {
  const path = usePathname()

  return (
    <nav className="absolute z-10 mt-5 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent">
      <Container>
        <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
          <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
            <Link
              href="/"
              aria-label="logo"
              className="flex items-center space-x-2"
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
                Stability Nexus
              </span>
            </Link>

            <div className="relative flex max-h-10 items-center lg:hidden">
              <button
                aria-label="humburger"
                id="hamburger"
                className="relative -mr-6 p-6"
              >
                <div
                  aria-hidden="true"
                  id="line"
                  className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                />
                <div
                  aria-hidden="true"
                  id="line2"
                  className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                />
              </button>
            </div>
          </div>
          <div
            id="navLayer"
            aria-hidden="true"
            className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden"
          />
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

            <div className="mt-12 lg:mt-0">
              <Link
                href="https://discord.gg/YzDKeEfWtS"
                className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-secondary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-black">
                  {" "}
                  Join us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}
