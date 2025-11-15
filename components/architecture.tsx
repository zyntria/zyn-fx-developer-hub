export function Architecture() {
  return (
    <section className="py-24 px-4 lg:px-8 bg-card/50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-primary">ZynFX</span> Works
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            A simplified view of our deterministic settlement architecture.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-2 border-primary">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold">API Request</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your app sends a swap, payout, or compliance check request via REST API or SDK.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto border-2 border-secondary">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-semibold">Risk Screening</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automatic AML/CTF compliance checks ensure regulatory adherence in real-time.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-2 border-primary">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold">Settlement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transaction executes with deterministic finality in under 0.5 seconds.
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-muted/30 rounded-lg border border-border">
            <div className="font-mono text-sm space-y-2">
              <div className="text-muted-foreground">// Example: Execute FX Swap</div>
              <div className="text-foreground">
                <span className="text-secondary">const</span> result = <span className="text-secondary">await</span>{" "}
                client.<span className="text-primary">swap</span>({"{"}
              </div>
              <div className="text-foreground pl-4">
                from: <span className="text-yellow-400">"USDC"</span>,
              </div>
              <div className="text-foreground pl-4">
                to: <span className="text-yellow-400">"JPYC"</span>,
              </div>
              <div className="text-foreground pl-4">
                amount: <span className="text-yellow-400">100</span>
              </div>
              <div className="text-foreground">{"}"});</div>
              <div className="text-muted-foreground pt-2">
                // Returns: {"{"}tx_id, rate, finality: "0.37s"{"}"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
