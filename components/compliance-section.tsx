import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, FileCheck, Globe } from "lucide-react"

export function ComplianceSection() {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Enterprise-Grade Compliance</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ZynFX meets the highest standards for security, compliance, and regulatory requirements across global
            markets.
          </p>
        </div>

        {/* Compliance Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center border-border/50">
            <div className="mx-auto p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">SOC 2 Type II</h3>
            <p className="text-sm text-muted-foreground">Certified security controls</p>
          </Card>

          <Card className="p-6 text-center border-border/50">
            <div className="mx-auto p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">ISO 27001</h3>
            <p className="text-sm text-muted-foreground">Information security certified</p>
          </Card>

          <Card className="p-6 text-center border-border/50">
            <div className="mx-auto p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit mb-4">
              <FileCheck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">PCI DSS</h3>
            <p className="text-sm text-muted-foreground">Payment card industry compliant</p>
          </Card>

          <Card className="p-6 text-center border-border/50">
            <div className="mx-auto p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit mb-4">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">GDPR Ready</h3>
            <p className="text-sm text-muted-foreground">EU data protection compliant</p>
          </Card>
        </div>

        {/* Regulatory Badges */}
        <Card className="p-8 border-border/50">
          <h3 className="text-xl font-semibold mb-6 text-center">Regulatory Compliance</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              FCA Authorized
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              MiFID II Compliant
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              FinCEN Registered
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              FATF Guidelines
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              Basel III Aligned
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              AML/KYC Verified
            </Badge>
          </div>
        </Card>

        {/* Security Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">256-bit</div>
            <p className="text-sm text-muted-foreground">End-to-end encryption</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.99%</div>
            <p className="text-sm text-muted-foreground">Platform uptime SLA</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Security monitoring</p>
          </div>
        </div>
      </div>
    </section>
  )
}
