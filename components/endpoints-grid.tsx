"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { API_BASE_URL } from "@/lib/api-config"

const endpoints = [
  {
    method: "GET",
    path: "/v1/health",
    description: "Check API health status and network connectivity",
    params: [],
  },
  {
    method: "GET",
    path: "/v1/currencies",
    description: "List all supported currencies with metadata",
    params: [],
  },
  {
    method: "GET",
    path: "/v1/rates",
    description: "Get real-time exchange rates for all currency pairs",
    params: ["base"],
  },
  {
    method: "GET",
    path: "/v1/quote",
    description: "Generate a deterministic FX quote with rate lock",
    params: ["from_currency", "to_currency", "amount"],
  },
  {
    method: "POST",
    path: "/v1/swap",
    description: "Execute FX swap with on-chain settlement and compliance",
    params: ["from_currency", "to_currency", "amount", "from_wallet", "to_wallet", "require_compliance"],
  },
  {
    method: "POST",
    path: "/v1/compliance/check",
    description: "Screen wallet address for sanctions and compliance",
    params: ["wallet_address"],
  },
  {
    method: "POST",
    path: "/v1/compliance/batch",
    description: "Batch compliance check for multiple wallet addresses",
    params: ["wallets"],
  },
  {
    method: "POST",
    path: "/v1/payouts",
    description: "Execute multi-recipient batch payouts with currency conversion",
    params: ["funding_currency", "funding_wallet", "payouts", "require_compliance"],
  },
  {
    method: "GET",
    path: "/v1/payouts/:job_id",
    description: "Retrieve status and details of a payout job",
    params: ["job_id"],
  },
  {
    method: "POST",
    path: "/v1/cctp/transfer",
    description: "Initiate cross-chain USDC transfer via Circle CCTP",
    params: ["amount", "toAddress", "destinationChain", "fromWallet"],
  },
  {
    method: "GET",
    path: "/v1/cctp/status/:messageHash",
    description: "Check status and attestation of CCTP cross-chain transfer",
    params: ["messageHash"],
  },
  {
    method: "GET",
    path: "/v1/cctp/supported-chains",
    description: "List all supported destination chains for CCTP transfers",
    params: [],
  },
  {
    method: "GET",
    path: "/v1/transactions/:id",
    description: "Retrieve detailed transaction information by ID",
    params: ["id"],
  },
  {
    method: "GET",
    path: "/v1/audit/logs",
    description: "Query audit logs with filtering and pagination",
    params: ["limit", "offset", "type", "from_date", "to_date"],
  },
  {
    method: "GET",
    path: "/v1/audit/stats",
    description: "Get aggregated audit statistics and metrics",
    params: [],
  },
  {
    method: "POST",
    path: "/v1/webhooks",
    description: "Register webhook endpoint for real-time event notifications",
    params: ["url", "events", "secret"],
  },
  {
    method: "GET",
    path: "/v1/webhooks",
    description: "List all registered webhook endpoints",
    params: [],
  },
  {
    method: "DELETE",
    path: "/v1/webhooks/:id",
    description: "Delete a registered webhook endpoint",
    params: ["id"],
  },
  // ARC-Yield Money Market
  {
    method: "POST",
    path: "/v1/yield/issuer/register",
    description: "Register bond issuer with KYC compliance",
    params: ["issuer_wallet", "legal_name", "jurisdiction", "contact_email"],
  },
  {
    method: "POST",
    path: "/v1/yield/bonds/issue",
    description: "Issue new bond series with specified terms",
    params: ["issuer_id", "currency", "series_name", "principal_per_unit", "units_offered", "coupon_rate_bps", "tenor_days"],
  },
  {
    method: "GET",
    path: "/v1/yield/bonds",
    description: "List all bond offerings with optional filters",
    params: ["status", "currency", "issuer_id", "page"],
  },
  {
    method: "GET",
    path: "/v1/yield/bonds/:id",
    description: "Get detailed information about a specific bond",
    params: ["id"],
  },
  {
    method: "POST",
    path: "/v1/yield/bonds/:id/subscribe",
    description: "Purchase bond units and receive NFT certificates",
    params: ["investor_wallet", "units", "payment_currency", "require_compliance"],
  },
  {
    method: "POST",
    path: "/v1/yield/bonds/:id/distribute-coupon",
    description: "Pay coupon to all NFT holders for a specific cycle",
    params: ["issuer_wallet", "cycle_index", "funding_wallet"],
  },
  {
    method: "POST",
    path: "/v1/yield/bonds/:id/redeem",
    description: "Redeem bond at maturity and burn NFT certificate",
    params: ["investor_wallet", "nft_token_id", "destination_currency"],
  },
  {
    method: "GET",
    path: "/v1/yield/pools",
    description: "Get lending pool information, TVL, and APY rates",
    params: [],
  },
  {
    method: "POST",
    path: "/v1/yield/deposit",
    description: "Deposit assets into lending pool to earn yield",
    params: ["wallet", "currency", "amount"],
  },
  {
    method: "POST",
    path: "/v1/yield/withdraw",
    description: "Withdraw deposited assets from lending pool",
    params: ["wallet", "currency", "amount"],
  },
  {
    method: "POST",
    path: "/v1/yield/borrow",
    description: "Borrow assets against collateral",
    params: ["borrower_wallet", "borrow_currency", "amount", "collateral_currency", "collateral_amount"],
  },
  {
    method: "POST",
    path: "/v1/yield/repay",
    description: "Repay borrowed assets and unlock collateral",
    params: ["borrower_wallet", "currency", "amount"],
  },
  {
    method: "GET",
    path: "/v1/yield/positions/:wallet",
    description: "Get all positions (bonds, pools, loans) for a wallet",
    params: ["wallet"],
  },
  {
    method: "GET",
    path: "/v1/yield/stats",
    description: "Get platform-wide KPIs and metrics",
    params: [],
  },
]

export function EndpointsGrid() {
  const [apiUrl, setApiUrl] = useState('http://localhost:4000')

  useEffect(() => {
    // Get the API URL on client-side
    setApiUrl(API_BASE_URL)
  }, [])

  return (
    <section id="endpoints" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6">API Endpoints</h2>
      <p className="text-muted-foreground mb-6">
        Complete reference for all available endpoints. Base URL: <code className="text-primary">{apiUrl}</code>
      </p>
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-primary mb-2">✨ New: ZynFX-Yield Money Market</h3>
        <p className="text-sm text-muted-foreground">
          Digital bonds, NFT certificates, lending pools, and borrowing infrastructure. Build corporate bond platforms, 
          DeFi lending protocols, and tokenized securities.
        </p>
      </div>
      <div className="grid gap-4">
        {endpoints.map((endpoint, i) => (
          <Card key={i} className="p-5 border-border/50 hover:border-primary/30 transition-colors group cursor-pointer">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Badge
                    variant="outline"
                    className={
                      endpoint.method === "POST"
                        ? "bg-green-500/10 text-green-500 border-green-500/30"
                        : endpoint.method === "GET"
                        ? "bg-blue-500/10 text-blue-500 border-blue-500/30"
                        : endpoint.method === "DELETE"
                        ? "bg-red-500/10 text-red-500 border-red-500/30"
                        : "bg-yellow-500/10 text-yellow-500 border-yellow-500/30"
                    }
                  >
                    {endpoint.method}
                  </Badge>
                  <code className="text-sm font-mono">{endpoint.path}</code>
                </div>
                <p className="text-muted-foreground text-sm mb-3">{endpoint.description}</p>
                {endpoint.params.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {endpoint.params.map((param) => (
                      <span key={param} className="text-xs font-mono bg-muted px-2 py-1 rounded border border-border/50">
                        {param}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
