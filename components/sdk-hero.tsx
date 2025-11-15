import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function SDKHero() {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-sm font-medium">Multiple Languages Supported</span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold text-balance mb-6">
          Developer-First
          <span className="text-primary"> SDK Suite</span>
        </h1>
        <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
          Build FX solutions in your preferred language. Type-safe, well-documented, and battle-tested by thousands of
          developers worldwide.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 group">
            Browse SDKs
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline">
            <Download className="mr-2 w-4 h-4" />
            Download Packages
          </Button>
        </div>
      </div>
    </section>
  )
}
