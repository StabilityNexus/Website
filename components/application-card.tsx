"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, X } from "lucide-react"

interface Deployment {
  chain: string
  status: string
  link?: string
}

interface Props {
  image: string
  title: string
  description: string
  longDescription?: string
  link: string
  category?: string
  status?: "Live" | "Soon" | "Coming Soon" | "Beta" | (string & {})
  deployments?: Deployment[]
  isLargeLogo?: boolean
  invertLogo?: boolean
}

const getBlockchainLogoUrl = (chain: string) => {
  const extensions: Record<string, string> = {
    citrea: "png",
  }
  const ext = extensions[chain.toLowerCase()] || "svg"
  return `/blockchains/${chain}.${ext}`
}

const ApplicationCard: React.FC<Props> = ({
  image,
  title,
  description,
  longDescription,
  link,
  category,
  status,
  deployments = [],
  isLargeLogo = false,
  invertLogo = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  // Block background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  // Determine status badge colors
  const getStatusStyles = (statusVal?: string) => {
    if (!statusVal) return null
    const lower = statusVal.toLowerCase()
    if (lower === "live") {
      return {
        bg: "bg-emerald-50 dark:bg-emerald-950/30",
        text: "text-emerald-700 dark:text-emerald-400",
        border: "border-emerald-200/50 dark:border-emerald-800/30",
        dot: "bg-emerald-500",
      }
    }
    if (lower === "soon" || lower === "coming soon" || lower === "in development") {
      return {
        bg: "bg-amber-50 dark:bg-amber-950/30",
        text: "text-amber-700 dark:text-amber-400",
        border: "border-amber-200/50 dark:border-amber-800/30",
        dot: "bg-amber-500",
      }
    }
    return {
      bg: "bg-sky-50 dark:bg-sky-950/30",
      text: "text-sky-700 dark:text-sky-400",
      border: "border-sky-200/50 dark:border-sky-800/30",
      dot: "bg-sky-500",
    }
  }

  const statusStyles = getStatusStyles(status)
  const chains = deployments.map((d) => d.chain)

  return (
    <>
      {/* Interactive Card Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="group flex flex-col h-full relative text-left w-full focus:outline-none"
      >
        <div className="flex w-full h-full flex-col overflow-hidden rounded-lg border border-zinc-200/80 bg-white/70 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:border-primary/30 dark:border-zinc-800/80 dark:bg-gray-800/40 dark:hover:border-secondary/30 dark:hover:bg-gray-800/60">
          
          {/* Floating Hover Arrow Icon in Top Right */}
          <div className="absolute top-4 right-4 transform translate-x-2 -translate-y-2 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white dark:bg-secondary dark:text-black shadow-md">
            <ArrowUpRight className="h-4 w-4" />
          </div>

          {/* Image Container (Exactly h-48) */}
          <div className="relative h-48 w-full overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/10 border-b border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-center">
            {/* Subtle background glow for logos */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,139,34,0.03),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,197,23,0.02),transparent_70%)] pointer-events-none" />
            <div className={`relative transition-transform duration-500 group-hover:scale-105 ${isLargeLogo ? "h-36 w-64" : "h-32 w-56"}`}>
              <Image
                src={image}
                alt={`${title} Logo`}
                fill
                sizes="(max-width: 768px) 200px, 280px"
                className={`object-contain ${isLargeLogo ? "p-0" : "p-1.5"} ${invertLogo ? "dark:brightness-0 dark:invert" : ""}`}
                unoptimized
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-semibold text-2xl leading-none tracking-tight mb-3 text-zinc-950 dark:text-white transition-colors duration-200 group-hover:text-primary dark:group-hover:text-secondary">
              {title}
            </h3>
            
            <p className="text-zinc-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">
              {description}
            </p>
          </div>

          {/* Bottom Row */}
          <div className="p-6 pt-0 flex items-center justify-between min-h-[56px] w-full">
            <div className="flex flex-wrap gap-2">
              {category && (
                <span className="inline-flex items-center rounded-full border border-transparent bg-zinc-100 dark:bg-zinc-800/80 px-2.5 py-0.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-colors">
                  {category}
                </span>
              )}
              {statusStyles && (
                <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold border ${statusStyles.bg} ${statusStyles.text} ${statusStyles.border}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${statusStyles.dot} animate-pulse`} />
                  {status}
                </span>
              )}
            </div>

            {/* Bottom Right Area: Blockchain deployment logos */}
            {chains.length > 0 && (
              <div className="flex -space-x-2 overflow-hidden">
                {chains.map((chain) => (
                  <div
                    key={chain}
                    className="relative h-7 w-7 rounded-full ring-2 ring-white dark:ring-zinc-800/80 bg-white overflow-hidden shadow-sm flex items-center justify-center"
                    title={`Deployed on ${chain.charAt(0).toUpperCase() + chain.slice(1)}`}
                  >
                    <Image
                      src={getBlockchainLogoUrl(chain)}
                      alt={`${chain} logo`}
                      width={18}
                      height={18}
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </button>

      {/* Details Modal overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col gap-6 animate-in zoom-in-95 duration-200 text-left max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg"
              aria-label="Close details"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header Block */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {category && (
                  <span className="inline-flex items-center rounded-full border border-transparent bg-zinc-100 dark:bg-zinc-800/80 px-2.5 py-0.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                    {category}
                  </span>
                )}
                {statusStyles && (
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold border ${statusStyles.bg} ${statusStyles.text} ${statusStyles.border}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${statusStyles.dot} animate-pulse`} />
                    {status}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4">
                <div className={`relative flex-shrink-0 flex items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 overflow-hidden ${isLargeLogo ? "h-20 w-32 p-1" : "h-16 w-28 p-2"}`}>
                  <Image
                    src={image}
                    alt={`${title} Logo`}
                    fill
                    className={`object-contain ${title.toLowerCase() === "hackhub" ? "dark:brightness-0 dark:invert p-0.5" : "p-1.5"}`}
                    unoptimized
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
                    {title}
                  </h2>
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="flex flex-col gap-2">
              <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                {longDescription || description}
              </p>
            </div>

            {/* Deployments Breakdown */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-450 dark:text-zinc-500">
                Available On:
              </h4>
              <div className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/30">
                {deployments.map((deployment) => {
                  const chainName = deployment.chain.charAt(0).toUpperCase() + deployment.chain.slice(1)
                  const isInteractable = deployment.status.toLowerCase() === "live" || deployment.status.toLowerCase() === "beta"
                  const deployStyles = getStatusStyles(deployment.status)

                  return (
                    <div
                      key={deployment.chain}
                      className="flex items-center justify-between p-4 gap-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative h-8 w-8 rounded-full ring-2 ring-zinc-200 dark:ring-zinc-800 bg-white overflow-hidden flex items-center justify-center flex-shrink-0">
                          <Image
                            src={getBlockchainLogoUrl(deployment.chain)}
                            alt={`${deployment.chain} logo`}
                            width={20}
                            height={20}
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                        <div>
                          <span className="font-semibold text-zinc-900 dark:text-zinc-100 block text-xs sm:text-sm">
                            {deployment.chain === "ethereum-classic" ? "Ethereum Classic" : chainName}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        {deployStyles && (
                          <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold border ${deployStyles.bg} ${deployStyles.text} ${deployStyles.border}`}>
                            <span className={`h-1 w-1 rounded-full ${deployStyles.dot} animate-pulse`} />
                            {deployment.status}
                          </span>
                        )}

                        {isInteractable && deployment.link ? (
                          <Link
                            href={deployment.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 dark:text-secondary dark:hover:text-secondary/80 transition-colors py-1.5 px-3 rounded-lg border border-primary/20 dark:border-secondary/20 hover:bg-primary/5 dark:hover:bg-secondary/5"
                          >
                            <span>Launch</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        ) : (
                          <span className="text-xs text-zinc-400 dark:text-zinc-500 italic py-1.5 px-3">
                            Locked
                          </span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ApplicationCard
