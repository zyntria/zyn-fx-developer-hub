import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRightLeft, Shield, Zap, Globe, Lock, Code, Receipt, TrendingUp, Sparkles } from "lucide-react"

const features: Array<{
  icon: any
  title: string
  description: string
  badge?: string
}> = [
  {
    icon: Zap,
    title: "Sub-Second Settlement",
    description: "Deterministic finality in under 0.5 seconds with institutional-grade infrastructure.",
  },
  {
    icon: Receipt,
    title: "Digital Bonds",
    description: "Issue tokenized corporate bonds with automatic coupon payments and NFT certificates.",
    badge: "NEW",
  },
  {
    icon: TrendingUp,
    title: "Lending Pools",
    description: "Multi-currency pools with real-time APY tracking and collateralized borrowing.",
    badge: "NEW",
  },
  {
    icon: Shield,
    title: "Compliance-Ready",
    description: "Built-in AML/CTF screening and risk scoring for every transaction.",
  },
  {
    icon: ArrowRightLeft,
    title: "Programmable FX",
    description: "Swap between stablecoins with transparent rates and zero hidden fees.",
  },
  {
    icon: Globe,
    title: "Cross-Chain Transfers",
    description: "CCTP integration for seamless USDC transfers across supported chains.",
  },
  {
    icon: Lock,
    title: "Audit Trails",
    description: "Complete transaction history with exportable audit logs and webhooks.",
  },
  {
    icon: Code,
    title: "Developer-First",
    description: "Clean REST APIs with TypeScript and Python SDKs for rapid integration.",
  },
  {
    icon: Sparkles,
    title: "NFT Certificates",
    description: "Soulbound or transferable bond certificates with on-chain ownership tracking.",
    badge: "NEW",
  },
]

export function Features() {
  return (
    <section className="py-24 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Build <span className="text-primary">Programmable Finance</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Production-ready APIs designed for fintech builders, hackathon participants, and enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 relative"
            >
              {feature.badge && (
                <div className="absolute top-4 right-4">
                  <span className="bg-primary/20 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                    {feature.badge}
                  </span>
                </div>
              )}
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
