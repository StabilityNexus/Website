"use client"

import { useState } from "react"
import ApplicationCard from "@/components/application-card"
import Container from "@/components/container"

const applications = [
  {
    title: "Djed",
    description: "An algorithmic stablecoin protocol maintaining a stable peg through a fully backed asset reserve.",
    longDescription: "Djed is a formally verified crypto-backed autonomous stablecoin protocol. It operates as an algorithmic central bank that keeps the price stable by buying and selling stablecoins, using a reserve coin to absorb price fluctuations. By maintaining a collateralization ratio between 400% and 800%, Djed ensures stability even in volatile market conditions.",
    image: "/logos/djed.svg",
    link: "https://djed.one",
    categories: ["DeFi", "Stablecoins"],
    status: "Live",
    deployments: [
      { chain: "cardano", status: "Live", link: "https://djed.one" },
      { chain: "ergo", status: "Live", link: "https://sigmausd.io" },
      { chain: "ethereum-classic", status: "Beta", link: "https://etc.djed.one/" },
      { chain: "zephyr", status: "Live", link: "https://www.zephyrprotocol.com/" }
    ]
  },
  {
    title: "Gluon",
    description: "A stablecoin protocol designed to provide capital efficiency and robust peg maintenance.",
    longDescription: "Gluon is a capital-efficient stablecoin protocol designed to maintain a robust and resilient currency peg. It optimizes collateral utilization and implements stability mechanisms that absorb market shocks, providing a secure store of value for decentralized commerce.",
    image: "/logos/gluon.png",
    link: "https://gluon.gold",
    categories: ["DeFi", "Stablecoins"],
    status: "Live",
    deployments: [
      { chain: "ergo", status: "Live", link: "https://gluon.gold" }
    ]
  },
  {
    title: "hodlCoin",
    description: "A decentralized staking protocol enabling users to earn yield on their assets securely.",
    longDescription: "hodlCoin is a trustless, decentralized staking and financial game protocol. It allows users to lock up their assets in order to earn staking rewards and compound yield, providing an autonomous platform for long-term holders to grow their holdings.",
    image: "/logos/hodlcoin.svg",
    link: "https://hodlcoin.co.in",
    categories: ["DeFi", "Staking"],
    status: "Live",
    deployments: [
      { chain: "ergo", status: "Live", link: "https://hodlcoin.co.in" }
    ]
  },
  {
    title: "Hammer",
    description: "A decentralized auction house for secure, transparent, and bidding-based asset sales.",
    longDescription: "Hammer is an on-chain, trustless auction house protocol. It provides a secure framework for creators and holders to conduct transparent, bidding-based asset auctions, ensuring fair price discovery and immutable transaction settlements.",
    image: "/logos/hammer.svg",
    link: "https://hammer-auctions.stability.nexus/",
    categories: ["DeFi", "Auction"],
    status: "Beta",
    deployments: [
      { chain: "ergo", status: "Beta", link: "https://hammer-auctions.stability.nexus/" }
    ]
  },
  {
    title: "Destiny",
    description: "An innovative prediction pool platform allowing users to forecast future outcomes.",
    longDescription: "Destiny is an advanced decentralized prediction pool platform. It allows participants to pool collateral and forecast the outcomes of future events, using automated market mechanisms for fair reward distribution upon settlement.",
    image: "/logos/destiny.png",
    link: "https://forecast.bid",
    categories: ["DeFi", "Prediction"],
    status: "Coming Soon",
    deployments: [
      { chain: "ergo", status: "Coming Soon", link: "https://forecast.bid" }
    ]
  },
  {
    title: "Fate",
    description: "A perpetual prediction pool protocol for continuous forecasting markets.",
    longDescription: "Fate is a decentralized protocol designed for continuous, perpetual prediction pools. It enables running forecasting markets that do not have rigid expiry dates, offering users continuous exposure and hedging opportunities for continuous events.",
    image: "/logos/destiny.png",
    link: "https://fate.stability.nexus",
    categories: ["DeFi", "Prediction"],
    status: "Beta",
    deployments: [
      { chain: "ergo", status: "Beta", link: "https://fate.stability.nexus" }
    ]
  },
  {
    title: "Clowder",
    description: "A user-friendly platform for fungible token issuance and management.",
    longDescription: "Clowder is a decentralized tokenization portal that simplifies the process of creating, issuing, and managing fungible tokens. It provides a clean, user-friendly interface that lets anyone launch custom tokens on-chain without writing code.",
    image: "/logos/clowder.png",
    link: "https://clowder.stability.nexus",
    categories: ["Tokens"],
    status: "Live",
    deployments: [
      { chain: "ergo", status: "Live", link: "https://clowder.stability.nexus" }
    ]
  },
  {
    title: "VouchMe",
    description: "An on-chain testimonial and social proof platform for decentralized reputation.",
    longDescription: "VouchMe is a decentralized reputation and social proof platform. It allows users to issue, store, and verify on-chain testimonials and endorsements, creating a tamper-proof trust network for the web3 economy.",
    image: "/logos/vouchme.png",
    link: "https://vouchme.stability.nexus",
    categories: ["Social"],
    status: "Beta",
    deployments: [
      { chain: "ergo", status: "Beta", link: "https://vouchme.stability.nexus" }
    ]
  },
  {
    title: "Bene",
    description: "A decentralized fundraising platform supporting community-driven initiatives.",
    longDescription: "Bene is a decentralized fundraising platform built to support community-driven initiatives, open-source projects, and charitable causes. By utilizing smart contracts, Bene ensures transparent and direct distribution of funds from supporters to creators.",
    image: "/logos/bene.svg",
    link: "https://bene-ergo.stability.nexus",
    categories: ["DeFi", "Fundraising"],
    status: "Live",
    deployments: [
      { chain: "ergo", status: "Live", link: "https://bene-ergo.stability.nexus" }
    ]
  },
  {
    title: "FairFund",
    description: "An automated and transparent fund distribution protocol.",
    longDescription: "FairFund is an automated, decentralized treasury and fund distribution protocol. It allows groups to pool resources and transparently manage payouts based on pre-defined distribution rules, ensuring trustless financial administration.",
    image: "/logos/fairfund.svg",
    link: "https://fairfund.stability.nexus",
    categories: ["DeFi", "Fundraising"],
    status: "Beta",
    deployments: [
      { chain: "ergo", status: "Beta", link: "https://fairfund.stability.nexus" }
    ]
  },
  {
    title: "Chainvoice",
    description: "An on-chain invoicing tool designed for seamless Web3 business operations.",
    longDescription: "Chainvoice is an on-chain invoicing and payment request tool. It enables businesses, freelancers, and DAOs to generate professional crypto invoices, track payment status, and receive payouts securely on-chain.",
    image: "/logos/chainvoice.png",
    link: "https://chainvoice.stability.nexus",
    categories: ["DeFi", "Invoices"],
    status: "Beta",
    deployments: [
      { chain: "ergo", status: "Beta", link: "https://chainvoice.stability.nexus" }
    ]
  },
  {
    title: "HackHub",
    description: "A comprehensive platform for organizing and participating in Web3 hackathons.",
    longDescription: "HackHub is an all-in-one decentralized platform for hosting, organizing, and participating in hackathons. It integrates prize pool escrow management, project submissions, and judge voting on-chain for maximum fairness.",
    image: "/logos/hackhub.png",
    link: "https://hackhub.stability.nexus",
    categories: ["DeFi", "Hackathon"],
    status: "Beta",
    deployments: [
      { chain: "ergo", status: "Beta", link: "https://hackhub.stability.nexus" }
    ],
    isLargeLogo: true,
    invertLogo: true,
  },
  {
    title: "TNT",
    description: "A specialized protocol for non-fungible trust token issuance.",
    longDescription: "TNT is a trustless protocol designed for issuing non-fungible trust tokens. It provides a decentralized standard for representing credentials, membership status, and verified trust relationships on public blockchain ledgers.",
    image: "/logos/tnt.svg",
    link: "https://tnt.stability.nexus",
    categories: ["Tokens"],
    status: "Beta",
    deployments: [
      { chain: "ergo", status: "Beta", link: "https://tnt.stability.nexus" }
    ]
  },
  {
    title: "StablePay",
    description: "A decentralized payment gateway enabling merchants to accept stablecoin payments seamlessly.",
    longDescription: "StablePay is a decentralized payment gateway designed for Web3 commerce. It enables merchants and platforms to accept customer payments in stablecoins securely, providing automated routing and transaction settlement with minimal price volatility friction.",
    image: "/logos/stablepay.svg",
    link: "#",
    categories: ["DeFi"],
    status: "Coming Soon",
    deployments: []
  },
]

export default function ApplicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Dynamically extract unique categories
  const categories = ["All", ...Array.from(new Set(applications.flatMap((app) => app.categories)))]

  // Filter application list based on selected category state
  const filteredApplications = selectedCategory === "All"
    ? applications
    : applications.filter((app) => app.categories.includes(selectedCategory))

  return (
    <div className="relative pt-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 pointer-events-none"
      >
        <div className="h-56 bg-gradient-to-r from-primary via-info to-secondary blur-[100px]"></div>
        <div className="h-56 bg-gradient-to-r from-secondary via-info to-primary blur-[100px]"></div>
      </div>

      <Container>
        {/* Page Title */}
        <h2 className="text-left font-sans text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
          Applications
        </h2>

        {/* Category Filters Row */}
        <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 mb-12 w-full">
          {categories.map((category) => {
            const isActive = selectedCategory === category
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-transform duration-200 active:scale-[0.98] ${
                  isActive
                    ? "bg-primary border-transparent shadow-sm dark:bg-secondary dark:text-zinc-950"
                    : "bg-transparent text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-zinc-950 dark:text-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:text-zinc-200"
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        {/* Applications Grid */}
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredApplications.map((application) => (
            <div key={application.title} className="transition-all duration-300 ease-out animate-in fade-in duration-300">
              <ApplicationCard
                image={application.image}
                title={application.title}
                description={application.description}
                longDescription={application.longDescription}
                link={application.link}
                categories={application.categories}
                status={application.status}
                deployments={application.deployments}
                isLargeLogo={application.isLargeLogo}
                invertLogo={application.invertLogo}
              />
            </div>
          ))}
        </div>
      </Container>

    </div>
  )
}
