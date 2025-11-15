import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SDKHero } from "@/components/sdk-hero"
import { SDKGrid } from "@/components/sdk-grid"
import { SDKFeatures } from "@/components/sdk-features"
import { SDKComparison } from "@/components/sdk-comparison"

export default function SDKPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <SDKHero />
      <SDKGrid />
      <SDKFeatures />
      <SDKComparison />
      <Footer />
    </main>
  )
}
