import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import Container from "./container"

interface Paper {
  title: string
  authors: string
  venue: string
  link: string
  image: string
}

const featuredPapers: Paper[] = [
  {
    title: "Djed: A Formally Verified Crypto-Backed Autonomous Stablecoin Protocol",
    authors: "J. Zahnentferner, D. Kaidalov, J.-F. Etienne, J. Diaz",
    venue: "IEEE ICBC · 2023",
    link: "https://eprint.iacr.org/2021/1069",
    image: "/papers/ieee.png",
  },
  {
    title: "Orb: Formally Verified, Decentralized and Sustainable Oracles",
    authors: "J. Zahnentferner, S. Dengre, L. D'Angelo, L. Quilling",
    venue: "Stability Nexus · 2026",
    link: "https://cdn.jsdelivr.net/gh/StabilityNexus/Papers/papers/Orb/v2.pdf",
    image: "/papers/orb_v2.png",
  },
  {
    title: "Gluon W: A Cryptocurrency Stabilization Protocol",
    authors: "B. Woltzenlogel Paleo, L. D'Angelo, M. Shaheer, G. Reis",
    venue: "Cryptology ePrint · 2025",
    link: "https://cdn.jsdelivr.net/gh/StabilityNexus/Papers/papers/Gluon/W/v2.pdf",
    image: "/papers/gluon_w_v2.png",
  },
]

export default function ResearchHighlights() {
  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-24">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl flex flex-col items-center text-center lg:items-start lg:text-left lg:ml-4 xl:ml-14">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-800 dark:text-zinc-200 underline underline-offset-4 decoration-zinc-800/30 dark:decoration-zinc-200/30">
              Research Library
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-primary/8 via-secondary/4 to-transparent dark:from-primary/15 dark:via-secondary/5 dark:to-transparent border border-primary/30 dark:border-green-500/40 text-zinc-700 dark:text-zinc-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
              </span>
              25+ Peer-Reviewed Publications
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-black dark:text-white mt-3 tracking-tight">
            Highlights of Our Research Output
          </h2>
          <p className="text-base md:text-lg font-normal text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
            Peer-reviewed papers on decentralized financial primitives and protocols{" "}
            <br className="hidden md:inline" />
            that promote stability, trust, autonomy and resilience, and power 10+ applications.
          </p>
        </div>

        {/* Paper Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {featuredPapers.map((paper, index) => (
            <Link
              key={index}
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent transition-all duration-200 cursor-pointer p-3 sm:p-4 overflow-hidden"
            >
              {/* Paper Cover Thumbnail on Top */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-white shadow-2xl transition-all duration-200 group-hover:shadow-zinc-900/20 dark:bg-zinc-950 dark:shadow-none">
                {/* Floating Indicator Icon in corner of thumbnail */}
                <div className="pointer-events-none absolute right-2.5 top-2.5 z-10 flex size-7 items-center justify-center rounded border border-zinc-200 dark:border-zinc-700/80 bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 shadow-sm transition-all duration-200 group-hover:scale-105">
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </div>

                <Image
                  src={paper.image}
                  alt={`Cover of ${paper.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-2 transition-transform duration-200 group-hover:scale-105"
                  priority={index === 0}
                />
              </div>

              {/* Card Metadata Below */}
              <div className="relative mt-4 flex flex-col flex-1">
                <h3 className="font-serif text-[17px] sm:text-[19px] font-normal text-black dark:text-white leading-snug tracking-tight group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-200 line-clamp-3">
                  {paper.title}
                </h3>
                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 font-normal line-clamp-2">
                  {paper.authors}
                </p>
                <div className="mt-auto pt-4 flex">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] sm:text-xs font-semibold bg-gray-100 dark:bg-zinc-800/60 text-gray-600 dark:text-gray-300 border border-zinc-200/50 dark:border-zinc-700/50 leading-none">
                    {paper.venue}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Link Buttons */}
        <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/research"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-secondary hover:bg-secondary/95 text-black font-semibold text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center shadow-sm"
          >
            <span>Browse All Our Papers</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/research#talks"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 text-black dark:text-white font-semibold text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center"
          >
            <span>Watch Our Research Talks</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  )
}
