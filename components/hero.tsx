import Image from "next/image"
import Link from "next/link"
import Container from "./container"

export default function Hero() {
  return (
    <div className="relative py-10 md:pt-[130px] md:pb-[80px]" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40"
      >
        <div className="h-56 bg-gradient-to-r from-primary via-info to-secondary blur-[100px]"></div>
        <div className="h-56 bg-gradient-to-r from-secondary via-info to-primary blur-[100px]"></div>
      </div>
      <Container>
        <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[53%_47%] lg:gap-[90px] items-center">

          {/* Text Content (Headline, Subtitle, Buttons) */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:ml-14">
            <h1 className="font-serif text-3xl md:text-[48px] lg:text-[50px] font-normal text-black dark:text-white leading-[1.3] tracking-tight max-w-xl">
              <span className="text-[#FFBF00] dark:text-[#FFBF00]">Research and Development</span><br className="hidden lg:inline" />
              <span className="bg-gradient-to-r from-secondary via-info to-primary bg-clip-text text-transparent">
                of Novel Technologies for
              </span><br className="hidden lg:inline" />
              <span className="text-primary">Greater Global Stability</span>
            </h1>
            <p className="mt-12 text-base md:text-lg font-normal text-gray-700 dark:text-gray-300 max-w-2xl">
              Advancing decentralization and autonomy through<br className="hidden md:inline" />
              formal methods and rigorous software engineering
            </p>
            <div className="mt-12 flex w-full max-w-xs flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center lg:justify-start sm:gap-6">
              <Link
                href="https://discord.gg/YzDKeEfWtS"
                aria-label="Join our Discord community"
                className="w-full sm:w-auto h-11 px-6 rounded-full bg-secondary hover:bg-secondary/95 text-black font-semibold text-base transition duration-200 hover:scale-[1.02] active:scale-[0.98] text-center flex items-center justify-center shadow-sm"
              >
                Join Discord
              </Link>
              <Link
                href="mailto:contact@stability.nexus"
                aria-label="Contact Stability Nexus by email"
                className="w-full sm:w-auto h-11 px-6 rounded-full border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 text-black dark:text-white font-semibold text-base transition duration-200 hover:scale-[1.02] active:scale-[0.98] text-center flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Logo Content */}
          <div className="flex justify-center order-first lg:order-last w-full">
            <Image
              unoptimized
              priority
              src="/logo-animated.gif"
              alt="Stability Nexus Logo"
              height={290}
              width={290}
              className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px] object-contain"
            />
          </div>

        </div>
      </Container>
    </div>
  )
}


