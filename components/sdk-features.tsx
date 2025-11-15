import { Card } from "@/components/ui/card"
import { CheckCircle2, Zap, Shield, Code2, RefreshCw, Bug } from "lucide-react"

const features = [
  {
    icon: CheckCircle2,
    title: "Type-Safe",
    description: "Full TypeScript support with intelligent autocomplete and compile-time checks",
  },
  {
    icon: Zap,
    title: "Optimized Performance",
    description: "Minimal bundle size, tree-shakeable, and optimized for production workloads",
  },
  {
    icon: Shield,
    title: "Built-In Security",
    description: "Automatic key rotation, request signing, and secure credential management",
  },
  {
    icon: Code2,
    title: "Developer Experience",
    description: "Intuitive APIs, comprehensive examples, and detailed error messages",
  },
  {
    icon: RefreshCw,
    title: "Automatic Retries",
    description: "Smart retry logic with exponential backoff for transient failures",
  },
  {
    icon: Bug,
    title: "Debug Mode",
    description: "Verbose logging, request/response inspection, and troubleshooting tools",
  },
]

export function SDKFeatures() {
  return (
    <section className="container mx-auto px-4 py-16 bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Built for Production</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Every SDK is crafted with production workloads in mind, offering enterprise-grade features out of the box.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => {
          const Icon = feature.icon
          return (
            <Card key={i} className="p-6 border-border/50">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
