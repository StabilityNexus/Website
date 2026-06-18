import Card from "@/components/card"
import Container from "@/components/container"
import CTA from "@/components/cta"

const blockchains1 = [
  {
    title: "Ergo",
    description:
      "A resilient platform for contract-based financial applications with proof-of-work consensus.",
    image: "/blockchains/ergo.svg",
    link: "https://ergoplatform.org/en/",
  },
  {
    title: "Cardano",
    description:
      "A decentralized proof-of-stake blockchain platform designed for security and sustainability.",
    image: "/blockchains/cardano.svg",
    link: "https://cardano.org/",
  },
  {
    title: "Ethereum Classic",
    description:
      "A decentralized, trustless, and secure smart contract platform that preserves the original Ethereum chain.",
    image: "/blockchains/ethereum-classic.svg",
    link: "https://ethereumclassic.org/",
  },
]
const blockchains2 = [
  {
    title: "Milkomeda",
    description:
      "An EVM-compatible layer-2 network bringing smart contract capabilities to non-EVM blockchains.",
    image: "/blockchains/milkomeda.svg",
    link: "https://milkomeda.com/",
  },
  {
    title: "Alephium",
    description:
      "A secure, fast, and scalable sharded blockchain platform for decentralized finance and smart contracts.",
    image: "/blockchains/alephium.svg",
    link: "https://alephium.org/",
  },
  {
    title: "Sui",
    description:
      "A high-performance Layer-1 blockchain with low-latency and high throughput using the Move language.",
    image: "/blockchains/sui.svg",
    link: "https://sui.io/",
  },
  {
    title: "Citrea",
    description:
      "The first rollup that enhances Bitcoin's block space with zero-knowledge smart contracts.",
    image: "/blockchains/citrea.png",
    link: "https://citrea.xyz/",
  },
]

export default function BlockchainsPage() {
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
        <div className="mb-20 grid gap-8 md:grid-cols-3 lg:grid-cols-3">
          {blockchains1.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {blockchains2.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </Container>
      <CTA
        heading="Support Us"
        text="Entities associated with the blockchains listed above have been supporting the work of The Stable Order 
        through benefactions, grants, prizes, awards and sponsorships. 
        We are grateful for their support, which allowed us to complete numerous funded projects. If you care about stability, support us too."
        link="https://docs.stability.nexus/about-us/fund-us"
        linkText="Fund Us"
      />
    </div>
  )
}
