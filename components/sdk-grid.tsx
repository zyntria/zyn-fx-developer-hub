import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star, Download } from "lucide-react"

const sdks = [
  {
    name: "TypeScript/JavaScript",
    description: "Full-featured SDK with TypeScript support and React hooks",
    version: "v2.4.1",
    downloads: "125K/week",
    stars: "8.2K",
    install: "npm install @zynfx/sdk",
    features: ["TypeScript", "React Hooks", "WebSocket", "Tree-shakeable"],
    status: "stable",
  },
  {
    name: "Python",
    description: "Pythonic API with async/await support and type hints",
    version: "v1.8.3",
    downloads: "42K/week",
    stars: "3.5K",
    install: "pip install zynfx",
    features: ["Async/Await", "Type Hints", "Pandas Integration", "CLI Tools"],
    status: "stable",
  },
]

export function SDKGrid() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Choose Your Language</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Production-ready SDKs for TypeScript and Python with comprehensive documentation and type safety.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {sdks.map((sdk, i) => (
          <Card key={i} className="p-6 border-border/50 hover:border-primary/30 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1">{sdk.name}</h3>
                <Badge variant="outline" className="text-xs">
                  {sdk.version}
                </Badge>
              </div>
              <Badge className="bg-primary/10 text-primary border-primary/20">{sdk.status}</Badge>
            </div>

            <p className="text-sm text-muted-foreground mb-4">{sdk.description}</p>

            <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                <span>{sdk.stars}</span>
              </div>
              <div className="flex items-center gap-1">
                <Download className="w-4 h-4" />
                <span>{sdk.downloads}</span>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-3 mb-4 font-mono text-xs overflow-x-auto">
              <code>{sdk.install}</code>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {sdk.features.map((feature) => (
                <span key={feature} className="text-xs px-2 py-1 rounded-full bg-accent/50 border border-accent/30">
                  {feature}
                </span>
              ))}
            </div>

            <Button
              variant="outline"
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all bg-transparent"
            >
              View Documentation
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </Card>
        ))}
      </div>
    </section>
  )
}
