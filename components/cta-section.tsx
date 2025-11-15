import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 p-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl border border-primary/20">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Ready to Build the Future of Finance?</h2>
          <p className="text-xl text-muted-foreground text-balance">
            Join developers building on institutional-grade financial infrastructure. Get started in minutes with our
            comprehensive documentation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="glow-teal text-lg px-8" asChild>
              <Link href="/docs">Explore API Docs</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
              <Link href="https://discord.gg">Join Discord</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
