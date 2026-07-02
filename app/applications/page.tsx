import ApplicationCard from "@/components/application-card"
import Container from "@/components/container"
import CTA from "@/components/cta"

const applications = [
  {
    title: "Djed",
    description: "An algorithmic stablecoin protocol maintaining a stable peg through a fully backed asset reserve.",
    image: "/logos/djed.svg",
    link: "https://djed.one",
    category: "DeFi",
    status: "Live",
    blockchains: ["ergo", "cardano", "ethereum-classic", "milkomeda"],
  },
  {
    title: "Gluon",
    description: "A stablecoin protocol designed to provide capital efficiency and robust peg maintenance.",
    image: "/logos/gluon.png",
    link: "https://gluon.gold",
    category: "DeFi",
    status: "Live",
    blockchains: ["ergo"],
  },
  {
    title: "hodlCoin",
    description: "A decentralized staking protocol enabling users to earn yield on their assets securely.",
    image: "/logos/hodlcoin.svg",
    link: "https://hodlcoin.co.in",
    category: "DeFi",
    status: "Live",
    blockchains: ["ergo"],
  },
  {
    title: "Hammer",
    description: "A decentralized auction house for secure, transparent, and bidding-based asset sales.",
    image: "/logos/hammer.svg",
    link: "https://hammer-auctions.stability.nexus/",
    category: "Auction",
    status: "Beta",
    blockchains: ["ergo"],
  },
  {
    title: "Destiny",
    description: "An innovative prediction pool platform allowing users to forecast future outcomes.",
    image: "/logos/destiny.png",
    link: "https://forecast.bid",
    category: "Prediction",
    status: "Coming Soon",
    blockchains: ["ergo"],
  },
  {
    title: "Fate",
    description: "A perpetual prediction pool protocol for continuous forecasting markets.",
    image: "/logos/destiny.png",
    link: "https://fate.stability.nexus",
    category: "Prediction",
    status: "Beta",
    blockchains: ["ergo"],
  },
  {
    title: "Clowder",
    description: "A user-friendly platform for fungible token issuance and management.",
    image: "/logos/clowder.png",
    link: "https://clowder.stability.nexus",
    category: "Tokens",
    status: "Live",
    blockchains: ["ergo"],
  },
  {
    title: "VouchMe",
    description: "An on-chain testimonial and social proof platform for decentralized reputation.",
    image: "/logos/vouchme.png",
    link: "https://vouchme.stability.nexus",
    category: "Social",
    status: "Beta",
    blockchains: ["ergo"],
  },
  {
    title: "Bene",
    description: "A decentralized fundraising platform supporting community-driven initiatives.",
    image: "/logos/bene.svg",
    link: "https://bene-ergo.stability.nexus",
    category: "Fundraising",
    status: "Live",
    blockchains: ["ergo"],
  },
  {
    title: "FairFund",
    description: "An automated and transparent fund distribution protocol.",
    image: "/logos/fairfund.svg",
    link: "https://fairfund.stability.nexus",
    category: "Fundraising",
    status: "Beta",
    blockchains: ["ergo"],
  },
  {
    title: "Chainvoice",
    description: "An on-chain invoicing tool designed for seamless Web3 business operations.",
    image: "/logos/chainvoice.png",
    link: "https://chainvoice.stability.nexus",
    category: "Invoices",
    status: "Beta",
    blockchains: ["ergo"],
  },
  {
    title: "HackHub",
    description: "A comprehensive platform for organizing and participating in Web3 hackathons.",
    image: "/logos/hackhub.png",
    link: "https://hackhub.stability.nexus",
    category: "Hackathon",
    status: "Beta",
    blockchains: ["ergo"],
  },
  {
    title: "TNT",
    description: "A specialized protocol for non-fungible trust token issuance.",
    image: "/logos/tnt.svg",
    link: "https://tnt.stability.nexus",
    category: "Tokens",
    status: "Beta",
    blockchains: ["ergo"],
  },
]

export default function ApplicationsPage() {
  return (
    <div className="relative pt-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40"
      >
        <div className="h-56 bg-gradient-to-r from-primary via-info to-secondary blur-[100px]"></div>
        <div className="h-56 bg-gradient-to-r from-secondary via-info to-primary blur-[100px]"></div>
      </div>

      <Container>
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((application, index) => (
            <ApplicationCard
              key={application.title}
              image={application.image}
              title={application.title}
              description={application.description}
              link={application.link}
              category={application.category}
              status={application.status}
              blockchains={application.blockchains}
            />
          ))}
        </div>
      </Container>

      <CTA
        heading="The Stable Order"
        text="The Stable Order is an open and mutually supportive collaboration, whose primary activity is the research and development of novel protocols that stabilize the decentralized economy. If you share our goals and would like to work together or support us, get in touch."
        link="https://docs.stability.nexus/about-us/the-stable-order/join-the-stable-order"
        linkText="Join the Stable Order"
      />
    </div>
  )
}
