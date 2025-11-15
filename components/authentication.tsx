import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Key, Shield, Clock } from "lucide-react"

export function Authentication() {
  return (
    <section id="authentication" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6">Authentication</h2>
      <div className="space-y-6">
        <Card className="p-6 border-border/50">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
              <Key className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">API Keys</h3>
              <p className="text-muted-foreground mb-4">
                ZynFX uses API keys for authentication. Include your key in the Authorization header of every request.
              </p>
              <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                <code className="text-foreground">Authorization: Bearer arc_live_...</code>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-border/50">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20">
              <Shield className="w-6 h-6 text-secondary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Key Types</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 shrink-0">
                    TEST
                  </Badge>
                  <div>
                    <p className="font-medium">Test Keys</p>
                    <p className="text-sm text-muted-foreground">Use for development. Prefix: arc_test_</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="mt-1 shrink-0 bg-primary">LIVE</Badge>
                  <div>
                    <p className="font-medium">Live Keys</p>
                    <p className="text-sm text-muted-foreground">Production environment. Prefix: arc_live_</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-border/50">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
              <Clock className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Rate Limits</h3>
              <p className="text-muted-foreground mb-3">Standard limits per API key:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Standard tier:</span>
                  <span className="font-mono">1,000 req/min</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Enterprise tier:</span>
                  <span className="font-mono">10,000 req/min</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Burst limit:</span>
                  <span className="font-mono">100 req/sec</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
