import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Architecture } from "@/components/architecture"
import { ComplianceSection } from "@/components/compliance-section"
import { CTASection } from "@/components/cta-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Architecture />
      <ComplianceSection />
      <CTASection />
      <Footer />
    </main>
  )
}
