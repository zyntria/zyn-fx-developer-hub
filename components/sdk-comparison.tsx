import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"

const features = [
  { name: "Type Safety", arcfx: true, competitor: false },
  { name: "React Hooks", arcfx: true, competitor: false },
  { name: "WebSocket Support", arcfx: true, competitor: true },
  { name: "Automatic Retries", arcfx: true, competitor: false },
  { name: "Request Caching", arcfx: true, competitor: true },
  { name: "Batch Operations", arcfx: true, competitor: false },
  { name: "Debug Mode", arcfx: true, competitor: true },
  { name: "Rate Limit Handling", arcfx: true, competitor: false },
  { name: "Tree-shakeable", arcfx: true, competitor: false },
  { name: "Webhook Validation", arcfx: true, competitor: true },
]

export function SDKComparison() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose ZynFX SDKs</h2>
          <p className="text-lg text-muted-foreground">
            More features, better performance, superior developer experience.
          </p>
        </div>

        <Card className="border-border/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-6 h-6 rounded bg-primary"></div>
                      <span>ZynFX SDK</span>
                    </div>
                  </th>
                  <th className="text-center p-4 font-semibold text-muted-foreground">Competitors</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, i) => (
                  <tr key={i} className="border-b border-border/30 last:border-0">
                    <td className="p-4 font-medium">{feature.name}</td>
                    <td className="p-4 text-center">
                      {feature.arcfx ? (
                        <div className="flex justify-center">
                          <div className="p-1 rounded-full bg-primary/10">
                            <Check className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <div className="p-1 rounded-full bg-muted">
                            <X className="w-5 h-5 text-muted-foreground" />
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {feature.competitor ? (
                        <div className="flex justify-center">
                          <div className="p-1 rounded-full bg-muted">
                            <Check className="w-5 h-5 text-muted-foreground" />
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <div className="p-1 rounded-full bg-muted">
                            <X className="w-5 h-5 text-muted-foreground" />
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  )
}
