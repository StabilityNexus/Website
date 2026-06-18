import CTA from "@/components/cta"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <main>
      <Hero />
      <CTA
        heading="Stability Matters!"
        text="Join our community of developers, researchers, and creators to collaborate on designing and building protocols that bring economic stability to the decentralized web."
        link="https://discord.gg/YzDKeEfWtS"
        linkText="Join us in Discord"
      />
    </main>
  )
}
