"use client"

import { useRef } from "react"
import Container from "@/components/container"

export default function EventsPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const upcomingScrollContainerRef = useRef<HTMLDivElement>(null)

  const tabs = [
    { id: "upcoming", label: "UPCOMING" },
    { id: "past", label: "PAST EVENTS" },
  ]

  const pastEditions = [
    {
      id: "stability-2025",
      eyebrow: "PROCEEDINGS",
      title: "1st Stability Workshop",
      subtitle: "(STABILITY 2025)",
      date: "December 15, 2025",
      location: "LNMIIT Jaipur, India",
      sessions: 4,
      papers: 10,
      link: "https://workshop.stability.nexus/",
      description: "STABILITY 2025 brought together researchers to present works on the foundations of blockchains and decentralized finance protocols. After thorough peer review, 10 papers were selected for presentation at the workshop. Extended revised versions of these papers will appear in a special issue of the Journal of Financial Technology.",
      gradient: "from-primary/30 via-info/20 to-transparent blur-[50px]",
    }
  ]

  const upcomingEvents = [
    {
      id: "weekly-meeting",
      title: "Weekly Research Meeting",
      date: "Every Wednesday",
      location: "Discord",
      link: "https://discord.com/events/995968619034984528/1464179973047717888",
      description: "Join our weekly research meeting where we discuss stability, trust, autonomy, and resilience in decentralized systems. Bring your ideas, questions, and research to collaborate with our community.",
      focusAreas: ["Decentralized Finance", "Protocol Resilience", "Autonomy & Stability", "Tokenomics Design"]
    }
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollCarousel = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.querySelector(".snap-center") as HTMLElement
      const scrollAmount = card ? card.offsetWidth + 24 : scrollContainerRef.current.clientWidth
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const scrollUpcomingCarousel = (direction: "left" | "right") => {
    if (upcomingScrollContainerRef.current) {
      const card = upcomingScrollContainerRef.current.querySelector(".snap-center") as HTMLElement
      const scrollAmount = card ? card.offsetWidth + 24 : upcomingScrollContainerRef.current.clientWidth
      upcomingScrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative w-full overflow-hidden min-h-screen">
      {/* Decorative light blur effect background (no grid) */}
      <div
        aria-hidden="true"
        className="fixed top-[120px] left-0 right-0 bottom-0 grid grid-cols-2 -space-x-52 opacity-40 pointer-events-none -z-10"
      >
        <div className="h-56 bg-gradient-to-r from-primary via-info to-secondary blur-[100px]"></div>
        <div className="h-56 bg-gradient-to-r from-secondary via-info to-primary blur-[100px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-0 md:pt-28">
        <Container>
          <div className="flex flex-col items-start w-full">
            {/* Breadcrumb Eyebrow */}
            <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-600 dark:text-zinc-400">
              ACADEMIC EVENTS ON STABILITY
            </p>

            {/* Massive left-aligned serif heading on a single line */}
            <h1 className="w-full font-serif text-5xl font-normal leading-[1.05] tracking-[-0.02em] text-black dark:text-white sm:text-7xl xl:text-[6.5rem]">
              Stability in Motion
            </h1>

            {/* Sub-line */}
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-650 dark:text-zinc-300">
              Global Interdisciplinary conferences, workshops, forums and research meetings exploring stability, trust, autonomy and resilience across science, engineering and economics in society.
            </p>

            {/* Tab Navigation serving as smooth scroll links (border-b removed to float cleanly) */}
            <div className="mt-12 w-full flex items-center space-x-6 sm:space-x-8 pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className="group relative pb-1 text-[11px] sm:text-xs font-bold tracking-widest text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-all duration-200"
                >
                  {tab.label}
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 1. Upcoming Section (Simplified, clean layout) */}
      <section id="upcoming" className="mt-16 md:mt-24 py-24 md:py-32 border-t border-zinc-200/60 dark:border-zinc-800/60 scroll-mt-20">
        <Container>
          <div className="w-full flex flex-col gap-10">
            {/* Heading for Upcoming Section */}
            <div className="flex items-center justify-between w-full">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-black dark:text-white leading-none">
                  Upcoming Events
                </h2>
              </div>
              
              {/* Arrow Controls - only visible if there are multiple events */}
              {upcomingEvents.length > 1 && (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => scrollUpcomingCarousel("left")}
                    aria-label="Scroll left"
                    className="h-10 w-10 rounded-full border border-zinc-400 dark:border-zinc-600 bg-white/10 dark:bg-zinc-900/20 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  </button>
                  <button
                    onClick={() => scrollUpcomingCarousel("right")}
                    aria-label="Scroll right"
                    className="h-10 w-10 rounded-full border border-zinc-400 dark:border-zinc-600 bg-white/10 dark:bg-zinc-900/20 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                </div>
              )}
            </div>

            {/* Slider/Carousel Container - Centered if there is only 1 event */}
            <div
              ref={upcomingScrollContainerRef}
              className={`flex gap-6 overflow-x-auto pt-4 pb-12 px-4 -mx-4 scrollbar-none mask-fade-edges snap-x snap-mandatory w-full ${upcomingEvents.length === 1 ? 'justify-center' : ''}`}
            >
              {/* Left Spacers for Centering first card */}
              {upcomingEvents.length > 1 && (
                <>
                  <div className="shrink-0 w-[calc(50vw-384px-24px)] hidden md:block" />
                  <div className="shrink-0 w-4 block md:hidden" />
                </>
              )}
              {upcomingEvents.map((event) => (
                <a
                  key={event.id}
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-8 md:p-10 rounded-[32px] border border-primary/20 dark:border-secondary/20 bg-white/50 dark:bg-gray-900/30 backdrop-blur-md transition-all duration-300 shadow-2xl -translate-y-1 flex flex-col items-start w-full max-w-3xl overflow-hidden snap-center shrink-0"
                >
                  {/* Subtle background glow effect */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 via-info/5 to-transparent blur-[60px] pointer-events-none opacity-100 transition-opacity duration-500" />

                  {/* Title */}
                  <h3 className="font-sans text-2xl font-bold text-black dark:text-white leading-tight transition-colors duration-300 z-10">
                    {event.title}
                  </h3>

                  {/* Pills below Title */}
                  <div className="flex flex-wrap gap-4 mt-4 z-10">
                    <span className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 text-[11px] font-semibold tracking-wide">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                        <line x1="16" x2="16" y1="2" y2="6"/>
                        <line x1="8" x2="8" y1="2" y2="6"/>
                        <line x1="3" x2="21" y1="10" y2="10"/>
                      </svg>
                      {event.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 text-[11px] font-semibold tracking-wide">
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {event.location}
                    </span>
                  </div>

                  {/* Description below pills */}
                  <p className="mt-6 text-sm sm:text-base text-zinc-655 dark:text-zinc-300 leading-relaxed max-w-2xl z-10">
                    {event.description}
                  </p>

                  {/* Hollow CTA button matching View Proceedings */}
                  <span className="mt-8 inline-flex h-9 px-5 rounded-full border border-black dark:border-white hover:bg-black/5 dark:hover:bg-white/5 text-black dark:text-white font-semibold text-xs transition duration-200 items-center justify-center w-fit z-10">
                    Join Event on Discord &rarr;
                  </span>
                </a>
              ))}
              {/* Right Spacers for Centering last card */}
              {upcomingEvents.length > 1 && (
                <>
                  <div className="shrink-0 w-[calc(50vw-384px-24px)] hidden md:block" />
                  <div className="shrink-0 w-4 block md:hidden" />
                </>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Past Editions Section */}
      <section id="past" className="py-24 md:py-32 border-t border-zinc-200/60 dark:border-zinc-800/60 scroll-mt-20">
        <Container>
          <div className="w-full flex flex-col gap-10">
            
            {/* Header: Title on Left, Controls on Right */}
            <div className="flex items-center justify-between w-full">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-black dark:text-white leading-none">
                  Past Events
                </h2>
              </div>
              
              {/* Arrow Controls - only visible if there are multiple editions */}
              {pastEditions.length > 1 && (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => scrollCarousel("left")}
                    aria-label="Scroll left"
                    className="h-10 w-10 rounded-full border border-zinc-400 dark:border-zinc-600 bg-white/10 dark:bg-zinc-900/20 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  </button>
                  <button
                    onClick={() => scrollCarousel("right")}
                    aria-label="Scroll right"
                    className="h-10 w-10 rounded-full border border-zinc-400 dark:border-zinc-600 bg-white/10 dark:bg-zinc-900/20 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                </div>
              )}
            </div>

            {/* Slider/Carousel Container - Centered if there is only 1 edition */}
            <div
              ref={scrollContainerRef}
              className={`flex gap-6 overflow-x-auto pt-4 pb-12 px-4 -mx-4 scrollbar-none mask-fade-edges snap-x snap-mandatory w-full ${pastEditions.length === 1 ? 'justify-center' : ''}`}
            >
              {/* Left Spacers for Centering first card */}
              {pastEditions.length > 1 && (
                <>
                  <div className="shrink-0 w-[calc(50vw-512px-24px)] hidden xl:block" />
                  <div className="shrink-0 w-[calc(50vw-384px-24px)] hidden md:block xl:hidden" />
                  <div className="shrink-0 w-4 block md:hidden" />
                </>
              )}
              {pastEditions.map((edition) => (
                <div
                  key={edition.id}
                  className="w-full max-w-[calc(100vw-32px)] md:max-w-3xl xl:w-[1024px] xl:max-w-5xl grid grid-cols-1 md:grid-cols-2 rounded-[32px] border border-primary/20 dark:border-secondary/20 overflow-hidden bg-white/40 dark:bg-gray-900/40 snap-center shrink-0 shadow-2xl -translate-y-1 transition-all duration-300 min-h-[300px] md:min-h-[360px]"
                >
                  {/* Left Column: Visual graphic wrapper */}
                  <div className="bg-gradient-to-br from-primary via-info to-secondary text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden min-h-[260px] md:min-h-full">
                    {/* Glowing color accents */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 via-info/10 to-transparent blur-[50px] pointer-events-none" />
                    
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/70 z-10">
                      {edition.date}
                    </span>
                    
                    <div className="my-auto z-10">
                      <h3 className="font-serif text-3xl md:text-4xl font-normal leading-tight text-white lining-nums">
                        {edition.title}
                      </h3>
                      <p className="mt-2 text-xs text-white/90 font-mono tracking-widest uppercase z-10">
                        {edition.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-4 z-10">
                      <span className="text-[10px] font-mono tracking-widest text-white/80 flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        {edition.location}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: details copy */}
                  <div className="p-8 md:p-10 flex flex-col justify-between bg-zinc-50/30 dark:bg-zinc-900/30 flex-1 lining-nums">
                    <div>
                      {/* Sessions & Papers Stats */}
                      <div className="flex items-center space-x-4 text-xs text-zinc-400 font-semibold tracking-wider uppercase">
                        <span>{edition.sessions} Sessions</span>
                        <span>&bull;</span>
                        <span>{edition.papers} Papers</span>
                      </div>
                    </div>

                    {/* Centered Paragraph description */}
                    <div className="my-auto py-4">
                      <p className="text-sm text-zinc-655 dark:text-zinc-300 leading-relaxed">
                        {edition.description}
                      </p>
                    </div>

                    {/* View Proceedings button at the bottom */}
                    <div>
                      <a
                        href={edition.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 px-5 rounded-full border border-black dark:border-white hover:bg-black/5 dark:hover:bg-white/5 text-black dark:text-white font-semibold text-xs transition duration-200 items-center justify-center"
                      >
                        View Proceedings &rarr;
                      </a>
                    </div>
                  </div>

                </div>
              ))}
              {/* Right Spacers for Centering last card */}
              {pastEditions.length > 1 && (
                <>
                  <div className="shrink-0 w-[calc(50vw-512px-24px)] hidden xl:block" />
                  <div className="shrink-0 w-[calc(50vw-384px-24px)] hidden md:block xl:hidden" />
                  <div className="shrink-0 w-4 block md:hidden" />
                </>
              )}
            </div>

          </div>
        </Container>
      </section>

    </div>
  )
}
