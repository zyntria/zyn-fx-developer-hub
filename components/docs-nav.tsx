"use client"

import Link from "next/link"
import { FileCode, Lock, Zap, BookOpen, Code2 } from "lucide-react"

const sections = [
  { id: "quickstart", label: "Quick Start", icon: Zap },
  { id: "authentication", label: "Authentication", icon: Lock },
  { id: "endpoints", label: "API Endpoints", icon: FileCode },
  { id: "examples", label: "Code Examples", icon: Code2 },
  { id: "reference", label: "Full Reference", icon: BookOpen },
]

export function DocsNav() {
  return (
    <aside className="hidden lg:block w-64 shrink-0 sticky top-24 h-fit">
      <nav className="space-y-1">
        <h3 className="text-sm font-semibold mb-4 text-muted-foreground">Documentation</h3>
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-accent/50 transition-colors group"
            >
              <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="group-hover:text-foreground transition-colors">{section.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
