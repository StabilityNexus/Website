import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface Props {
  image: string
  title: string
  description: string
  link: string
  category?: string
  status?: "Live" | "Soon" | "Coming Soon" | "Beta" | string
  blockchains?: string[]
}

const ApplicationCard: React.FC<Props> = ({
  image,
  title,
  description,
  link,
  category,
  status,
  blockchains,
}) => {
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
  
  // Check if the image is a logo or a full-bleed screenshot
  const isLogo = image.includes("/logos/") && !image.includes("-preview")

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="group flex flex-col h-full relative">
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-zinc-200/80 bg-white/70 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:border-primary/30 dark:border-zinc-800/80 dark:bg-gray-800/40 dark:hover:border-secondary/30 dark:hover:bg-gray-800/60">
        
        {/* Floating Hover Arrow Icon in Top Right */}
        <div className="absolute top-4 right-4 transform translate-x-2 -translate-y-2 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white dark:bg-secondary dark:text-black shadow-md">
          <ArrowUpRight className="h-4 w-4" />
        </div>

        {/* Image Container (Exactly h-48) */}
        <div className="relative h-48 w-full overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/10 border-b border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-center">
          {isLogo ? (
            <>
              {/* Subtle background glow for logos */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,139,34,0.03),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,197,23,0.02),transparent_70%)] pointer-events-none" />
              <div className={`relative transition-transform duration-500 group-hover:scale-105 ${title.toLowerCase() === "hackhub" ? "h-36 w-64" : "h-32 w-56"}`}>
                <Image
                  src={image}
                  alt={`${title} Logo`}
                  fill
                  sizes="(max-width: 768px) 200px, 280px"
                  className={`object-contain ${title.toLowerCase() === "hackhub" ? "p-0 dark:brightness-0 dark:invert" : "p-1.5"}`}
                  loading="lazy"
                />
              </div>
            </>
          ) : (
            <Image
              src={image}
              alt={`${title} Preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          )}
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
        <div className="p-6 pt-0 flex items-center justify-between min-h-[56px]">
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
          {blockchains && blockchains.length > 0 && (
            <div className="flex -space-x-2 overflow-hidden">
              {blockchains.map((chain) => (
                <div
                  key={chain}
                  className="relative h-7 w-7 rounded-full ring-2 ring-white dark:ring-zinc-800/80 bg-white overflow-hidden shadow-sm flex items-center justify-center"
                  title={`Deployed on ${chain.charAt(0).toUpperCase() + chain.slice(1)}`}
                >
                  <img
                    src={chain === "citrea" ? "/blockchains/citrea.png" : `/blockchains/${chain}.svg`}
                    alt={`${chain} logo`}
                    className="h-4.5 w-4.5 object-contain"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ApplicationCard
