import Link from "next/link"
import Image from "next/image"
import { ShieldCheck, LockOpen, Cpu } from "lucide-react"
import Container from "./container"

const blockchains = [
  {
    title: "Ergo",
    image: "/blockchains/ergo.svg",
    link: "https://ergoplatform.org/en/",
    darkClass: "dark:brightness-0 dark:invert dark:hover:brightness-100 dark:hover:invert-0",
  },
  {
    title: "Cardano",
    image: "/blockchains/cardano.svg",
    link: "https://cardano.org/",
    darkClass: "dark:brightness-0 dark:invert dark:hover:brightness-100 dark:hover:invert-0",
  },
  {
    title: "Ethereum Classic",
    image: "/blockchains/ethereum-classic.svg",
    link: "https://ethereumclassic.org/",
    darkClass: "dark:brightness-0 dark:invert dark:hover:brightness-100 dark:hover:invert-0",
  },
  {
    title: "Milkomeda",
    image: "/blockchains/milkomeda.svg",
    link: "https://milkomeda.com/",
    darkClass: "dark:invert dark:hover:invert-0",
  },
  {
    title: "Alephium",
    image: "/blockchains/alephium.svg",
    link: "https://alephium.org/",
    darkClass: "dark:brightness-0 dark:invert dark:hover:brightness-100 dark:hover:invert-0",
  },
  {
    title: "Sui",
    image: "/blockchains/sui.svg",
    link: "https://sui.io/",
    darkClass: "dark:brightness-0 dark:invert dark:hover:brightness-100 dark:hover:invert-0",
  },
  {
    title: "Citrea",
    image: "/blockchains/citrea.png",
    link: "https://citrea.xyz/",
    darkClass: "dark:brightness-0 dark:invert dark:hover:brightness-100 dark:hover:invert-0",
  },
]

export default function Development() {
  const isCarousel = blockchains.length > 5

  return (
    <section className="relative py-24 md:py-32 border-t border-zinc-200/50 dark:border-zinc-800/50">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl flex flex-col items-center text-center lg:items-start lg:text-left lg:ml-4 xl:ml-14">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-800 dark:text-zinc-200 underline underline-offset-4 decoration-zinc-800/30 dark:decoration-zinc-200/30">
              Development
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-primary/8 via-secondary/4 to-transparent dark:from-primary/15 dark:via-secondary/5 dark:to-transparent border border-primary/30 dark:border-green-500/40 text-zinc-700 dark:text-zinc-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
              </span>
              13+ Active Deployments
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-black dark:text-white mt-3 tracking-tight">
            From Research to Production
          </h2>
          <p className="text-base md:text-lg font-normal text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
            We translate peer-reviewed research into production-grade software. Abiding by three core principles for stability, we ensure absolute resilience across all deployed applications.
          </p>
        </div>

        {/* Cohesive Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 dark:divide-zinc-800 border-t border-b border-zinc-200 dark:border-zinc-800 mt-16 max-w-6xl mx-auto">
          
          {/* Principle 1: Immutability */}
          <div className="flex flex-col items-start text-left py-10 lg:py-12 px-6 lg:px-8 xl:px-12 group transition-colors duration-200 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/10">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck 
                className="size-6 text-zinc-400 dark:text-zinc-500 transition-colors duration-200 group-hover:text-[#228B22] dark:group-hover:text-[#228B22]" 
                strokeWidth={1.5} 
              />
              <h3 className="font-serif text-xl md:text-2xl font-normal text-zinc-900 dark:text-zinc-100">
                Immutability
              </h3>
            </div>
            <p className="text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
              Once deployed on-chain, code cannot be modified by any party, guaranteeing predictable execution.
            </p>
          </div>

          {/* Principle 2: Permissionlessness */}
          <div className="flex flex-col items-start text-left py-10 lg:py-12 px-6 lg:px-8 xl:px-12 group transition-colors duration-200 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/10">
            <div className="flex items-center gap-3 mb-4">
              <LockOpen 
                className="size-6 text-zinc-400 dark:text-zinc-500 transition-colors duration-200 group-hover:text-[#FFC517] dark:group-hover:text-[#FFC517]" 
                strokeWidth={1.5} 
              />
              <h3 className="font-serif text-xl md:text-2xl font-normal text-zinc-900 dark:text-zinc-100">
                Permissionlessness
              </h3>
            </div>
            <p className="text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
              Our applications are open to everyone, requiring no intermediary approvals and ensuring censorship-resistance.
            </p>
          </div>

          {/* Principle 3: Autonomy */}
          <div className="flex flex-col items-start text-left py-10 lg:py-12 px-6 lg:px-8 xl:px-12 group transition-colors duration-200 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/10">
            <div className="flex items-center gap-3 mb-4">
              <Cpu 
                className="size-6 text-zinc-400 dark:text-zinc-500 transition-colors duration-200 group-hover:text-[#228B22] dark:group-hover:text-[#228B22]" 
                strokeWidth={1.5} 
              />
              <h3 className="font-serif text-xl md:text-2xl font-normal text-zinc-900 dark:text-zinc-100">
                Autonomy
              </h3>
            </div>
            <p className="text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
              Once deployed, the software operates continuously on public infrastructure without centralized coordination.
            </p>
          </div>

        </div>

        {/* Deployed Across Carousel (Evidence) */}
        <div className="mt-20 w-full overflow-hidden flex flex-col items-center gap-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-semibold select-none">
            Deployed Across
          </span>
          <div className="w-full overflow-hidden">
            {isCarousel ? (
              <div className="pause-on-hover relative flex overflow-x-hidden [mask-image:_linear-gradient(to_right,_transparent_0,_black_10%_90%,_transparent_100%)]">
                {/* Infinite scrolling marquee track */}
                <div className="animate-marquee flex items-center gap-12 whitespace-nowrap w-max">
                  {/* First Set of Logos */}
                  {blockchains.map((chain, index) => (
                    <Link
                      key={`${chain.title}-1-${index}`}
                      href={chain.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center shrink-0 w-[110px] sm:w-[140px] focus:outline-none"
                    >
                      <Image
                        src={chain.image}
                        alt={`${chain.title} logo`}
                        width={120}
                        height={32}
                        className={`h-6 sm:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${chain.darkClass}`}
                      />
                    </Link>
                  ))}
                  {/* Second Duplicate Set for Infinite Scroll */}
                  {blockchains.map((chain, index) => (
                    <Link
                      key={`${chain.title}-2-${index}`}
                      href={chain.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center shrink-0 w-[110px] sm:w-[140px] focus:outline-none"
                    >
                      <Image
                        src={chain.image}
                        alt={`${chain.title} logo`}
                        width={120}
                        height={32}
                        className={`h-6 sm:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${chain.darkClass}`}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap items-center justify-center gap-12">
                {blockchains.map((chain) => (
                  <Link
                    key={chain.title}
                    href={chain.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center shrink-0 w-[110px] sm:w-[140px] focus:outline-none"
                  >
                    <Image
                      src={chain.image}
                      alt={`${chain.title} logo`}
                      width={120}
                      height={32}
                      className={`h-6 sm:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${chain.darkClass}`}
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Narrative CTA (Action) */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/applications"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md bg-secondary hover:bg-secondary/95 text-black font-semibold text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center shadow-sm"
          >
            <span>Use our Decentralized Applications and Tools</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  )
}
