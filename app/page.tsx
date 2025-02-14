import CTA from "@/components/cta"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <main>
      <Hero />
      <CTA
        heading="Stability Matters!"
        text=""
        link="https://discord.gg/YzDKeEfWtS"
        linkText="Join us in Discord"
      />
    </main>
  )
}
