import Card from "@/components/card"
import Container from "@/components/container"
import CTA from "@/components/cta"

const protocols = [
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
    image: "./logos/hodlcoin.png",
    link: "https://hodlcoin.co.in",
  },
  {
    title: "Clowder (Soon!)",
    description: "Token Issuance",
    image: "./logos/clowder.png",
    link: "https://clowder.stability.nexus",
  },
  {
    title: "Destiny (Soon!)",
    description: "Prediction Pools",
    image: "./logos/destiny.png",
    link: "https://forecast.bid",
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
        {/*
        <div className="relative z-20 mb-12 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-black md:text-4xl">
            Protocols <br /> Researched and Developed <br /> by The Stable Order
          </h2>
          <p className="text-lg leading-6 text-black opacity-80 lg:mx-auto lg:w-6/12">
            
          </p>
        </div>
        */}
        {/*
        <h2 className="mb-5 text-2xl font-bold text-black underline decoration-dashed underline-offset-4">
          Protocols
        </h2>
        */}
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {protocols.map((protocol, index) => (
            <Card
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
        text="The Stable Order is an open and decentralized organization of mutually cooperative knights and benefactors. Its primary activity is the research and development of novel protocols that stabilizes the decentralized economy. If you share our goals and would like to work together or support us, get in touch."
        link="https://docs.stability.nexus/about-us/the-stable-order/join-the-stable-order"
        linkText="Join the Stable Order"
      />
    </div>
  )
}
