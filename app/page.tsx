import CTA from "@/components/cta"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <main>
      <Hero />
      <CTA
        heading="Stability Matters!"
        text="If you are or would like to be working on stability-related
            projects, let's work together."
        link="https://discord.gg/YzDKeEfWtS"
        linkText="Join us in Discord"
      />
    </main>
  )
}
