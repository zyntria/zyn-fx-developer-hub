import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SandboxPlayground } from "@/components/sandbox-playground"

export default function SandboxPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-sm font-medium">Live Testing Environment</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-4">Interactive API Sandbox</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Test our APIs in real-time without writing any code. Experiment with different parameters and see instant
              results.
            </p>
          </div>
          <SandboxPlayground />
        </div>
      </div>
      <Footer />
    </main>
  )
}
