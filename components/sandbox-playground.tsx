"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Copy, Check, Loader2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function SandboxPlayground() {
  const [endpoint, setEndpoint] = useState("convert")
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [response, setResponse] = useState<string | null>(null)

  // Form state
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("EUR")
  const [amount, setAmount] = useState("10000")
  const [settlementSpeed, setSettlementSpeed] = useState("instant")

  const handleExecute = async () => {
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const mockResponse = {
      id: `tx_${Math.random().toString(36).substr(2, 9)}`,
      from: fromCurrency,
      to: toCurrency,
      amount: Number.parseFloat(amount),
      rate: 0.92,
      converted: Number.parseFloat(amount) * 0.92,
      fee: Number.parseFloat(amount) * 0.001,
      status: "settled",
      settlementId: `set_${Math.random().toString(36).substr(2, 9)}`,
      settlementSpeed: settlementSpeed,
      timestamp: new Date().toISOString(),
      metadata: {
        processingTime: "234ms",
        liquidityProvider: "Prime Broker A",
        complianceCheck: "passed",
      },
    }

    setResponse(JSON.stringify(mockResponse, null, 2))
    setLoading(false)
  }

  const handleCopy = () => {
    if (response) {
      navigator.clipboard.writeText(response)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const generateCurlCommand = () => {
    return `curl https://api.arc-fx.com/v1/fx/${endpoint} \\
  -H "Authorization: Bearer arc_test_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "${fromCurrency}",
    "to": "${toCurrency}",
    "amount": ${amount},
    "settlementSpeed": "${settlementSpeed}"
  }'`
  }

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Left Panel - Configuration */}
      <Card className="p-6 border-border/50">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Configure Request</h2>
          <p className="text-sm text-muted-foreground">Set up your API request parameters and execute in real-time</p>
        </div>

        <div className="space-y-6">
          {/* Endpoint Selection */}
          <div className="space-y-2">
            <Label>Endpoint</Label>
            <Select value={endpoint} onValueChange={setEndpoint}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="convert">POST /v1/fx/convert</SelectItem>
                <SelectItem value="rates">GET /v1/fx/rates</SelectItem>
                <SelectItem value="quote">POST /v1/fx/quote</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* From Currency */}
          <div className="space-y-2">
            <Label htmlFor="from">From Currency</Label>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger id="from">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD - US Dollar</SelectItem>
                <SelectItem value="EUR">EUR - Euro</SelectItem>
                <SelectItem value="GBP">GBP - British Pound</SelectItem>
                <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                <SelectItem value="CHF">CHF - Swiss Franc</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* To Currency */}
          <div className="space-y-2">
            <Label htmlFor="to">To Currency</Label>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger id="to">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="EUR">EUR - Euro</SelectItem>
                <SelectItem value="USD">USD - US Dollar</SelectItem>
                <SelectItem value="GBP">GBP - British Pound</SelectItem>
                <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                <SelectItem value="CHF">CHF - Swiss Franc</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="10000"
            />
          </div>

          {/* Settlement Speed */}
          <div className="space-y-2">
            <Label htmlFor="speed">Settlement Speed</Label>
            <Select value={settlementSpeed} onValueChange={setSettlementSpeed}>
              <SelectTrigger id="speed">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="instant">Instant (sub-second)</SelectItem>
                <SelectItem value="fast">Fast (under 1 min)</SelectItem>
                <SelectItem value="standard">Standard (1-2 hours)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Execute Button */}
          <Button
            onClick={handleExecute}
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                Executing...
              </>
            ) : (
              <>
                <Play className="mr-2 w-4 h-4" />
                Execute Request
              </>
            )}
          </Button>
        </div>
      </Card>

      {/* Right Panel - Response */}
      <div className="space-y-6">
        <Card className="p-6 border-border/50">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-1">Response</h2>
              {response && (
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                  200 OK
                </Badge>
              )}
            </div>
            {response && (
              <Button variant="outline" size="sm" onClick={handleCopy} disabled={copied}>
                {copied ? (
                  <>
                    <Check className="mr-2 w-4 h-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 w-4 h-4" />
                    Copy
                  </>
                )}
              </Button>
            )}
          </div>

          <Tabs defaultValue="response" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="response" className="flex-1">
                Response
              </TabsTrigger>
              <TabsTrigger value="curl" className="flex-1">
                cURL
              </TabsTrigger>
            </TabsList>
            <TabsContent value="response" className="mt-4">
              <div className="bg-muted rounded-lg p-4 min-h-[400px] max-h-[600px] overflow-auto">
                {response ? (
                  <pre className="text-sm font-mono">
                    <code>{response}</code>
                  </pre>
                ) : (
                  <div className="flex items-center justify-center h-[400px] text-muted-foreground">
                    Execute a request to see the response
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="curl" className="mt-4">
              <div className="bg-muted rounded-lg p-4 min-h-[400px] max-h-[600px] overflow-auto">
                <pre className="text-sm font-mono">
                  <code>{generateCurlCommand()}</code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Info Card */}
        <Card className="p-4 border-border/50 bg-secondary/5">
          <div className="flex gap-3">
            <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20 h-fit">
              <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Using Test Mode</h4>
              <p className="text-sm text-muted-foreground">
                This sandbox uses test API keys. No real transactions will be processed. Switch to production keys when
                ready to go live.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
