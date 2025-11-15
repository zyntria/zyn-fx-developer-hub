import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileCode, BookOpen, Package, TestTube } from "lucide-react"

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">ZFX</span>
            </div>
            <span className="font-bold text-lg">ZynFX</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/docs"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Documentation
            </Link>
            <Link
              href="/sdk"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Package className="w-4 h-4" />
              SDKs
            </Link>
            <Link
              href="/sandbox"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <TestTube className="w-4 h-4" />
              Sandbox
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <FileCode className="w-4 h-4" />
              API Reference
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Get API Key
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
