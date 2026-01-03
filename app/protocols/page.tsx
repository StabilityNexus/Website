import Card from "@/components/card"
import Container from "@/components/container"
import CTA from "@/components/cta"

const protocols1 = [
  {
    title: "Djed",
    description: "Stablecoin Protocol",
    image: "./logos/djed.png",
    link: "https://djed.one",
  },
  {
    title: "Gluon",
    description: "Stablecoin Protocol",
    image: "./logos/gluon.png",
    link: "https://gluon.gold",
  },
  {
    title: "hodlCoin",
    description: "Staking Protocol",
    image: "./logos/hodlcoin.svg",
    link: "https://hodlcoin.co.in",
  },
  {
    title: "Hammer",
    description: "Auction House",
    image: "./logos/hammer.svg",
    link: "https://hammer-auctions.stability.nexus/",
  },
  {
    title: "Destiny (Soon!)",
    description: "Prediction Pools",
    image: "./logos/destiny.png",
    link: "https://forecast.bid",
  },
  {
    title: "Fate",
    description: "Perpetual Prediction Pools",
    image: "./logos/destiny.png",
    link: "https://fate.stability.nexus",
  },
  {
    title: "Clowder",
    description: "Fungible Token Issuance",
    image: "./logos/clowder.png",
    link: "https://clowder.stability.nexus",
  },
  {
    title: "VouchMe",
    description: "OnChain Testimonials",
    image: "./logos/vouchme.png",
    link: "https://vouchme.stability.nexus",
  },
  {
    title: "Bene",
    description: "Fundraising",
    image: "./logos/bene.svg",
    link: "https://bene-ergo.stability.nexus",
  },
  {
    title: "FairFund",
    description: "Fund Distribution",
    image: "./logos/fairfund.svg",
    link: "https://fairfund.stability.nexus",
  },
  {
    title: "Chainvoice",
    description: "OnChain Invoices",
    image: "./logos/chainvoice.png",
    link: "https://chainvoice.stability.nexus",
  },
  {
    title: "HackHub",
    description: "Hackathon Platform",
    image: "./logos/hackhub.png",
    link: "https://hackhub.stability.nexus",
  },
  {
    title: "TNT",
    description: "Non-Fungible Trust Token Issuance",
    image: "./logos/tnt.svg",
    link: "https://tnt.stability.nexus",
  },
]

export default function ProtocolsPage() {
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
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {protocols1.map((protocol, index) => (
            <Card
              key={protocol.title}   // ✅ FIXED: stable, unique key
              index={index}
              image={protocol.image}
              title={protocol.title}
              description={protocol.description}
              link={protocol.link}
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
