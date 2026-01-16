import Image from "next/image"
import Container from "./container"

export default function Hero() {
  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40"
      >
        <div className="h-56 bg-gradient-to-r from-primary via-info to-secondary blur-[100px]"></div>
        <div className="h-56 bg-gradient-to-r from-secondary via-info to-primary blur-[100px]"></div>
      </div>
      <Container>
        <div className="relative ml-auto pt-12">
          <div className="mx-auto text-center lg:w-2/3">
            <Image
              unoptimized
              fetchPriority="high"
              loading="lazy"
              src="./logo-animated.gif"
              alt="Stability Nexus Logo"
              height={200}
              width={200}
              className="mx-auto mb-4"
            />
            {/* 
            <h1 className="text-5xl font-medium tracking-tighter text-black dark:text-white md:text-6xl xl:text-8xl">
              <span className="block text-secondary dark:text-white">
                Stability
              </span>
              <span className="block text-primary dark:text-white">Nexus</span>
            </h1>
            /*}
            {/*
            <p className="mt-8 text-lg text-gray-700 dark:text-gray-300">
              The location in semantic space<br />
              for organizations and individuals<br />
              building a more stable world<br />
              through emerging technologies.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-4">
              <Link
                href="/protocols"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-secondary/30 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-medium text-black">
                  Learn more
                </span>
              </Link>
            </div>
            */}
          </div>
        </div>
      </Container>
    </div>
  )
}
