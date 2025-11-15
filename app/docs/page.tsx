import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DocsNav } from "@/components/docs-nav"
import { QuickStart } from "@/components/quick-start"
import { EndpointsGrid } from "@/components/endpoints-grid"
import { CodeExamples } from "@/components/code-examples"
import { Authentication } from "@/components/authentication"

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="flex gap-8">
          <DocsNav />
          <div className="flex-1 max-w-4xl">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-balance mb-4">API Documentation</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Complete reference for the ARC-FX API. Build compliant, real-time FX solutions with institutional-grade
                infrastructure.
              </p>
            </div>
            <QuickStart />
            <Authentication />
            <EndpointsGrid />
            <CodeExamples />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
