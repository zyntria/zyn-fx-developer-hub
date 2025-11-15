import { Card } from "@/components/ui/card"
import { Terminal } from "lucide-react"

export function QuickStart() {
  return (
    <section id="quickstart" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6">Quick Start</h2>
      <div className="space-y-6">
        <Card className="p-6 border-border/50">
          <h3 className="text-xl font-semibold mb-4">1. Install the SDK</h3>
          <div className="bg-muted rounded-lg p-4 font-mono text-sm">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Terminal className="w-4 h-4" />
              <span>npm</span>
            </div>
            <code className="text-primary">npm install @arc-fx/sdk</code>
          </div>
        </Card>

        <Card className="p-6 border-border/50">
          <h3 className="text-xl font-semibold mb-4">2. Initialize the Client</h3>
          <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-foreground">
              <code>{`import { ArcFX } from '@arc-fx/sdk';

const client = new ArcFX({
  apiKey: process.env.ZYNFX_API_KEY,
  environment: 'production'
});`}</code>
            </pre>
          </div>
        </Card>

        <Card className="p-6 border-border/50">
          <h3 className="text-xl font-semibold mb-4">3. Execute Your First Trade</h3>
          <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-foreground">
              <code>{`const trade = await client.fx.convert({
  from: 'USD',
  to: 'EUR',
  amount: 10000,
  settlementSpeed: 'instant'
});

console.log(trade);
// { id: 'tx_...', rate: 0.92, settled: true }`}</code>
            </pre>
          </div>
        </Card>
      </div>
    </section>
  )
}
