"use client"

import { useState, type ComponentProps } from "react"
import Container from "@/components/container"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const GithubIcon = ({ className, ...props }: ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)


const featuredPapers = [
  {
    title: "Stablecoin",
    description: `Bruno Woltzenlogel Paleo, PhD \n Encyclopedia of Cryptography, Security and Privacy`,
    date: "31st May 2023",
    image: "/papers/encyclopedia.png",
    link: "https://link.springer.com/referenceworkentry/10.1007/978-3-642-27739-9_1671-1",
  },
  {
    title:
      "Djed: A Formally Verified Crypto-Backed Autonomous Stablecoin Protocol",
    description:
      "J. Zahnentferner, D. Kaidalov, J.-F. Etienne, J. Diaz  \n IEEE International Conference on Blockchain and Cryptocurr.",
    date: "3rd May 2023",
    image: "/papers/ieee.png",
    link: "https://eprint.iacr.org/2021/1069",
  },
  {
    title: "Potential Points of Failure of Stablecoins",
    description:
      "M. Kakebayashi, A. Nejadmalayeri, A. Bracciali, B. W. Paleo, C. White, G. Weinstein, J. Nabrzyski, K. Katayama, L. Molchanovsky, M. Yamanaka, M. Travers, T. Yuyama, Y. Kawai",
    date: "25th Jul 2023",
    image: "/papers/bgin-failure.png",
    link: "https://bgin-global.org/documents/20230724_PoF_of_Stablecoins.pdf",
  },
  {
    title: "Design and Formalization of Oracles for Blockchains",
    description:
      "M. Shaheer, Prof. G. Reis, B. Woltzenlogel Paleo  \n Types and LPAR",
    date: "12th Jun 2023",
    image: "/papers/oracle.png",
    link: "https://media.upv.es/#/portal/video/14bf81a0-34f9-11ee-8317-3dc1d7f6252c",
  },
  {
    title: "Stablecoins - Past, Present and Future",
    description:
      "Prof. A. Nejadmalayeri, L. Molchanovsky, B. Woltzenlogel Paleo, R. W. Prescott \n Workshop on Coordination of Decentralized Finance",
    date: "19th Oct 2022",
    image: "/papers/bgin.png",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4226071",
  },
  {
    title: "Djed: A Formally-Verified Crypto-Backed Algorithmic Stablecoin",
    description: "J. Zahnentferner, D. Kaidalov, J.-E. Etienne, J. Diaz",
    date: "23rd Aug 2021",
    image: "/papers/djed.png",
    link: "https://eprint.iacr.org/2021/1069",
  },
  {
    title: "Orb: Formally Verified, Decentralized and Sustainable Oracles",
    description: "J. Zahnentferner, S. Dengre, L. D'Angelo, L. Quilling",
    date: "2026",
    image: "/papers/orb_v2.png",
    link: "https://cdn.jsdelivr.net/gh/StabilityNexus/Papers/papers/Orb/v2.pdf",
  },
  {
    title: "Fate Protocol: Perpetual Prediction Pools",
    description: "J. Zahnentferner, A. Jha, R. Shah \n 1st Stability Workshop",
    date: "1st Mar 2025",
    image: "/papers/fate_v1.png",
    link: "https://cdn.jsdelivr.net/gh/StabilityNexus/Papers/papers/Fate/v1.pdf",
  },
  {
    title: "RainDrop: Reward Distribution Protocol",
    description: "J. Zahnentferner, S. Dengre \n 1st Stability Workshop",
    date: "1st Mar 2025",
    image: "/papers/raindrop_v1.png",
    link: "https://cdn.jsdelivr.net/gh/StabilityNexus/Papers/papers/Raindrop/v1.pdf",
  },
  {
    title: "Djed Shu: A Stablecoin Protocol with Two Oracle Prices",
    description: "J. Zahnentferner, Y. Agrawal \n 1st Stability Workshop",
    date: "1st Mar 2025",
    image: "/papers/djed_shu_v1.png",
    link: "https://cdn.jsdelivr.net/gh/StabilityNexus/Papers/papers/Djed/Shu/v1.pdf",
  },
  {
    title: "Orb: Decentralized and Sustainable Oracles",
    description: "J. Zahnentferner, S. Dengre, L. D'Angelo \n 1st Stability Workshop",
    date: "1st Mar 2025",
    image: "/papers/orb_v1.png",
    link: "https://cdn.jsdelivr.net/gh/StabilityNexus/Papers/papers/Orb/v1.pdf",
  },
  {
    title: "Gluon W: A Cryptocurrency Stabilization Protocol",
    description: "B. Woltzenlogel Paleo, L. D'Angelo, M. Shaheer, G. Reis \n Cryptology ePrint Archive",
    date: "9th Oct 2025",
    image: "/papers/gluon_w_v2.png",
    link: "https://cdn.jsdelivr.net/gh/StabilityNexus/Papers/papers/Gluon/W/v2.pdf",
  },
  {
    title: "hodlCoin: A Staking Protocol",
    description: "J. Zahnentferner, L. D'Angelo \n Cryptology ePrint Archive",
    date: "17th Jun 2025",
    image: "/papers/hodlcoin_v2.png",
    link: "https://cdn.jsdelivr.net/gh/StabilityNexus/Papers/papers/hodlCoin/v2.pdf",
  },
  {
    title: "hodlCoin: A Financial Game",
    description: "J. Zahnentferner \n Cryptology ePrint Archive",
    date: "11th Sep 2023",
    image: "/papers/hodlcoin_v1.png",
    link: "https://cdn.jsdelivr.net/gh/StabilityNexus/Papers/papers/hodlCoin/v1.pdf",
  },
  {
    title: (
      <span>
        UTXO<sub>sf ma</sub>: UTXO with Multi-asset Support
      </span>
    ),
    description: "M. Chakravarty, J. Chapman, K. MacKenzie, O. Melkonian, J. Müller, M. Peyton Jones, P. Vinogradova, P. Wadler, J. Zahnentferner \n Springer LNCS",
    date: "20th Oct 2020",
    image: "/papers/eutxo_ma_v1.png",
    link: "https://cdn.jsdelivr.net/gh/StabilityNexus/Papers/papers/EUTXO-MA/v1.pdf",
  },
  {
    title: "Multi-Currency Ledgers",
    description: "J. Zahnentferner \n Cryptology ePrint Archive",
    date: "11th Aug 2020",
    image: "/papers/multiassets_v1.png",
    link: "https://cdn.jsdelivr.net/gh/StabilityNexus/Papers/papers/MultiAssets/v1.pdf",
  },
  {
    title: "An Abstract Model of UTxO-based Cryptocurrencies with Scripts",
    description: "J. Zahnentferner \n Cryptology ePrint Archive",
    date: "25th May 2018",
    image: "/papers/script_utxo_model_v1.png",
    link: "https://cdn.jsdelivr.net/gh/StabilityNexus/Papers/papers/Script-UTxO-Model/v1.pdf",
  },
  {
    title: "Chimeric Ledgers: Translating and Unifying UTXO & Account-based Cryptocurrencies",
    description: "J. Zahnentferner \n Cryptology ePrint Archive",
    date: "13th Mar 2018",
    image: "/papers/chimericledgers_v1.png",
    link: "https://cdn.jsdelivr.net/gh/StabilityNexus/Papers/papers/ChimericLedgers/v1.pdf",
  },
]

const videos = [
  {
    title: "Gluon W± | Bruno Woltzenlogel Paleo | Ergoversary Summit 2023",
    id: "tnvm1we6xts",
    duration: "16:06",
  },
  {
    title: "ErgoHack Fest | AgeUSD - A Pegged and Crypto-Backed Stablecoin | Bruno Woltzenlogel Paleo",
    id: "AzTlwT2Weg4",
    duration: "38:37",
  },
  {
    title: "Djed Stablecoin On Cardano",
    id: "5-Ozaf_aGNM",
    duration: "6:39",
  },
  {
    title: "Succinct Non-Interactive Share Proofs in Proof-of-Work Cryptocurrencies",
    id: "7nru1JSW9Ak",
    duration: "35:39",
  },
  {
    title: "Raindrop Staking and Reward Distribution Protocol",
    id: "bhLfSUhguU4",
    duration: "6:01",
  },
  {
    title: "Fate Protocol - Perpetual Prediction Pools",
    id: "isSIH_ohN7U",
    duration: "14:27",
  },
  {
    title: "Orb Oracle Protocol",
    id: "uK_8Baygmrs",
    duration: "19:56",
  },
  {
    title: "Gluon W - Formal Verification",
    id: "MU0MYz-x8kY",
    duration: "9:08",
  },
  {
    title: "Gluon W Stablecoin Protocol - Formal Verification",
    id: "HIYKZNNVM-4",
    duration: "13:17",
  },
  {
    title: "Gluon W",
    id: "oP5ni0EH9dc",
    duration: "10:22",
  },
  {
    title: "Dexy - Simple Stablecoin Design Based on Algorithmic Central Bank (Part 2)",
    id: "q9mIFaK5Gp0",
    duration: "16:25",
  },
  {
    title: "Dexy - Simple Stablecoin Design Based on Algorithmic Central Bank (Part 1)",
    id: "2KPy_K2Ux6U",
    duration: "8:29",
  },
  {
    title: "Djed Shu Stablecoin Protocol",
    id: "VKPsaCQO_j4",
    duration: "35:03",
  },
  {
    title: "Money Creation with Elastic Supply via Trust and Blockchain Assets in Global Digital P2P Environment",
    id: "gTwKxizAXZQ",
    duration: "36:13",
  },
  {
    title: "Gluon Update - Ergoversary",
    id: "qiO4H7fSx-E",
    duration: "4:02",
  },
  {
    title: "Bene Proof-of-Funding Fundraising Platform - Ergoversary",
    id: "zCHHsO9is10",
    duration: "15:25",
  },
  {
    title: "Issues in Stablecoin Regulations?",
    id: "AmRRDpquGi8",
    duration: "10:46",
  },
  {
    title: "BGIN Block #6 July 27, 2022 - Stablecoins Panel",
    id: "dJtw950OOvo",
    duration: "48:57",
  },
  {
    title: "Ideas for improvement of the Djed Protocol - Dr. Bruno W Paleo | Ergo Summit 2022 - DeFi",
    id: "yTgapwydOW0",
    duration: "37:01",
  },
  {
    title: "Ergo Summit 2021 - Entering The New Era - Announcing AgeUSD & The Hardening Upgrade",
    id: "zG-rxMCDIa0",
    duration: "8:37:13",
  },
  {
    title: "zkFFT Extending Halo2 with Vector Commitments & More",
    id: "f6sm_RAdRA0",
    duration: "12:28",
  },
  {
    title: "Formalization of Oracles",
    id: "N7vdAx71zVg",
    duration: "23:11",
  },
]


export default function ResearchPage() {
  const [activeVideo, setActiveVideo] = useState(videos[0])
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="relative pt-12">
      <link rel="preconnect" href="https://www.youtube-nocookie.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="anonymous" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40"
      >
        <div className="h-56 bg-gradient-to-r from-primary via-info to-secondary blur-[100px]"></div>
        <div className="h-56 bg-gradient-to-r from-secondary via-info to-primary blur-[100px]"></div>
      </div>
      <Container className="relative z-10">
        {/*
        <div className="relative z-20 mb-12 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-black md:text-4xl">
            Insights from Our Research Network
          </h2>
          <p className="text-lg leading-6 text-black opacity-80 lg:mx-auto lg:w-6/12">

          </p>
        </div>
        */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-2xl font-bold text-black underline decoration-dashed underline-offset-4 dark:text-white">
            Featured Papers
          </h2>
          <Link
            href="https://github.com/StabilityNexus/Papers"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center justify-center gap-2 px-4 py-2 border border-black bg-transparent text-black dark:border-white dark:text-white rounded-lg transition-all duration-300 hover:text-primary hover:border-primary dark:hover:text-primary dark:hover:border-primary text-sm font-semibold shadow-sm w-fit"
          >
            <GithubIcon className="h-4 w-4 transition-transform duration-300 group-hover/btn:scale-110" />
            <span>View Papers Repository</span>
          </Link>
        </div>
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPapers.map((paper, index) => (
            <Link
              href={paper.link}
              key={index}
              className="group relative flex h-full flex-col justify-between rounded-lg border border-zinc-200 p-4 shadow-xl dark:border-zinc-700 dark:bg-gray-800/50 dark:shadow-none sm:p-6"
            >
              <div
                className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-white shadow-2xl transition-all duration-300 group-hover:shadow-zinc-900/20"
              >
                <div className="pointer-events-none absolute right-2.5 top-2.5 z-10 flex size-7 items-center justify-center rounded border border-zinc-200 bg-white text-zinc-950 shadow-md transition-all duration-300 hover:scale-105 hover:bg-zinc-50">
                  <ExternalLink className="size-3.5 text-zinc-950" aria-hidden="true" />
                </div>

                {paper.image ? (
                  <Image
                    src={paper.image}
                    alt="Research paper cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center bg-white transition duration-500 group-hover:scale-105">
                    <svg
                      className="size-16 text-zinc-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="relative mt-2 grow sm:mt-4">
                <h3 className="text-2xl font-semibold leading-6 tracking-tight text-gray-800 dark:text-gray-100">
                  {paper.title}
                </h3>
                {/* <div className="my-3 flex w-fit items-center gap-2 rounded-md bg-zinc-100 p-2">
                  <svg
                    viewBox="0 0 24 24"
                    height={20}
                    width={20}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        opacity="0.2"
                        d="M3 10.312C3 5.93757 3.93757 5 8.312 5H15.688C20.0624 5 21 5.93757 21 10.312V15.688C21 20.0624 20.0624 21 15.688 21H8.312C3.93757 21 3 20.0624 3 15.688V10.312Z"
                        fill="#323232"
                      />
                      <path
                        d="M3 10.312C3 5.93757 3.93757 5 8.312 5H15.688C20.0624 5 21 5.93757 21 10.312V15.688C21 20.0624 20.0624 21 15.688 21H8.312C3.93757 21 3 20.0624 3 15.688V10.312Z"
                        stroke="#323232"
                        strokeWidth="2"
                      />
                      <path
                        d="M6 5L6 3"
                        stroke="#323232"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 5L18 3"
                        stroke="#323232"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 9H17"
                        stroke="#323232"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                  <span className="text-sm font-medium text-black">
                    {paper.date}
                  </span>
                </div> */}
                <p className="mt-2 text-black dark:text-gray-300">
                  {paper.description.split("\n").map((item, key) => {
                    return (
                      <span key={key}>
                        {item}
                        <br />
                      </span>
                    )
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div id="talks" className="mb-6 mt-10 flex flex-col gap-2 scroll-mt-20">
          <h2 className="text-2xl font-bold text-black underline decoration-dashed underline-offset-4 dark:text-white">
            Research Talks
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Talks, panels, and presentations by Stability Nexus researchers — covering stablecoins, oracles, prediction markets, and formal verification.
          </p>
        </div>

        <div className="mb-20 w-full rounded-lg border border-zinc-200 bg-white p-4 shadow-xl dark:border-zinc-700 dark:bg-gray-800/50 dark:shadow-none sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Player */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-950">
                {isPlaying ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  ></iframe>
                ) : (
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="group/thumb absolute inset-0 size-full cursor-pointer bg-transparent border-0 p-0 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                    aria-label={`Play video: ${activeVideo.title}`}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${activeVideo.id}/maxresdefault.jpg`}
                      alt={activeVideo.title}
                      className="size-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover/thumb:bg-black/40 transition-colors duration-300" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center justify-center size-16 rounded-full bg-white/90 dark:bg-black/85 text-black dark:text-white shadow-2xl transition-all duration-300 group-hover/thumb:scale-110 group-hover/thumb:bg-red-600 group-hover/thumb:text-white group-active/thumb:scale-95">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="currentColor" 
                          className="size-8 translate-x-0.5"
                        >
                          <path d="M8 5.14v14l11-7-11-7z" />
                        </svg>
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>

            {/* Sidebar list */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 px-1 mb-1">
                Playlist Videos ({videos.length})
              </span>
              <div className="flex flex-col gap-2 overflow-y-auto max-h-[300px] lg:max-h-[350px] pr-1 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700">
                {videos.map((video, idx) => (
                  <button
                    key={video.id}
                    onClick={() => {
                      setActiveVideo(video)
                      setIsPlaying(true)
                    }}
                    className={`flex items-start gap-3 p-2 rounded-lg border text-left transition-all duration-200 active:scale-[0.98] ${
                      activeVideo.id === video.id
                        ? "bg-zinc-100 border-zinc-300 dark:bg-zinc-700/50 dark:border-zinc-600 text-black dark:text-white"
                        : "bg-transparent border-transparent hover:bg-zinc-50 dark:hover:bg-zinc-800/40 text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    <span className="flex items-center justify-center size-5 rounded-full bg-zinc-200 dark:bg-zinc-700 text-[10px] font-bold text-gray-700 dark:text-gray-300 shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold leading-tight line-clamp-2">
                        {video.title}
                      </span>
                      <span className="text-[10px] text-gray-400 dark:text-gray-500">
                        {video.duration}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-700">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-bold tracking-wider text-black dark:text-white" style={{ fontVariant: "small-caps" }}>
                Stability Nexus · YouTube
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                All research talks, workshops, and conference presentations
              </span>
            </div>
            <Link
              href="https://youtube.com/@StabilityNexus"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center justify-center gap-2 px-4 py-2 border border-black bg-transparent text-black dark:border-white dark:text-white rounded-lg transition-all duration-300 hover:text-primary hover:border-primary dark:hover:text-primary dark:hover:border-primary text-sm font-semibold shadow-sm w-fit active:scale-95 hover:scale-[1.02]"
            >
              <span>
                View channel{" "}
                <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
