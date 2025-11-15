"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { API_FULL_URL } from "@/lib/api-config"

const getExamples = (apiUrl: string) => ({
  typescript: `// Execute a batch payout with compliance checks
import axios from 'axios';

const API_URL = '${apiUrl}';

async function executeBatchPayout() {
  // Step 1: Check compliance for all recipients
  const recipients = [
    { wallet: '0x1234567890abcdef1234567890abcdef12345678', amount: 1000 },
    { wallet: 'So11111111111111111111111111111111111111112', amount: 500 }
  ];

  for (const recipient of recipients) {
    const compliance = await axios.post(\`\${API_URL}/compliance/check\`, {
      wallet_address: recipient.wallet
    });
    console.log(\`Compliance: \${compliance.data.status}\`);
  }

  // Step 2: Execute batch payout
  const payout = await axios.post(\`\${API_URL}/payouts\`, {
    funding_currency: 'USDC',
    funding_wallet: '0xYourFundingWalletAddressHere000000000000000',
    payouts: [
      {
        to_wallet: recipients[0].wallet,
        currency: 'USDC',
        amount: recipients[0].amount,
        destination_chain: 'ARC'
      },
      {
        to_wallet: recipients[1].wallet,
        currency: 'USDC',
        amount: recipients[1].amount,
        destination_chain: 'SOLANA'
      }
    ],
    require_compliance: true
  });

  console.log(\`Job ID: \${payout.data.job_id}\`);
  console.log(\`Status: \${payout.data.status}\`);
  console.log(\`Total: \${payout.data.total_funding_used} USDC\`);
  
  // Step 3: Check audit logs
  const logs = await axios.get(\`\${API_URL}/audit/logs?type=payout&limit=5\`);
  console.log(\`Recent transactions: \${logs.data.total}\`);

  return payout.data;
}

// Get real-time exchange rates
async function getExchangeRates() {
  const response = await axios.get(\`\${API_URL}/rates?base=USDC\`);
  
  console.log('Exchange Rates:');
  console.log(\`USDC → EURC: \${response.data.rates.EURC}\`);
  console.log(\`USDC → USYC: \${response.data.rates.USYC}\`);
  console.log(\`Source: \${response.data.source}\`);
  
  return response.data.rates;
}

// Cross-chain USDC transfer via CCTP
async function transferToSolana() {
  const transfer = await axios.post(\`\${API_URL}/cctp/transfer\`, {
    amount: 1000,
    toAddress: 'So11111111111111111111111111111111111111112',
    destinationChain: 'SOLANA',
    fromWallet: '0xYourFundingWalletAddressHere000000000000000'
  });

  console.log(\`Transfer initiated: \${transfer.data.burnTxHash}\`);
  console.log(\`Message hash: \${transfer.data.messageHash}\`);
  console.log(\`Status: \${transfer.data.status}\`);
  console.log(\`Estimated time: \${transfer.data.estimatedTime}\`);
  
  return transfer.data;
}

// ZynFX-Yield: Issue corporate bond
async function issueBond() {
  // Step 1: Register as issuer
  const issuer = await axios.post(\`\${API_URL}/yield/issuer/register\`, {
    issuer_wallet: '0xYourWalletHere...',
    legal_name: 'Acme Corp',
    jurisdiction: 'US',
    contact_email: 'treasury@acme.com'
  });
  console.log(\`Issuer ID: \${issuer.data.issuer_id}\`);

  // Step 2: Issue bond
  const bond = await axios.post(\`\${API_URL}/yield/bonds/issue\`, {
    issuer_id: issuer.data.issuer_id,
    issuer_wallet: '0xYourWalletHere...',
    currency: 'USDC',
    series_name: 'Corp90D',
    principal_per_unit: '1000000',
    units_offered: 5000,
    coupon_rate_bps: 500,
    coupon_frequency: 'MONTHLY',
    tenor_days: 90,
    subscription_start: '2025-11-15T00:00:00Z',
    subscription_end: '2025-12-15T00:00:00Z',
    transferability: 'SOULBOUND'
  });
  
  console.log(\`Bond ID: \${bond.data.bond_id}\`);
  console.log(\`NFT Contract: \${bond.data.nft_contract}\`);
  console.log(\`Maturity: \${bond.data.maturity_date}\`);
  
  return bond.data;
}

// Subscribe to bond and receive NFT
async function subscribeToBond(bondId: string) {
  const subscription = await axios.post(\`\${API_URL}/yield/bonds/\${bondId}/subscribe\`, {
    investor_wallet: '0xInvestorWallet...',
    units: 100,
    payment_currency: 'USDC',
    require_compliance: true
  });
  
  console.log(\`NFT Token IDs: \${subscription.data.nft_token_ids.join(', ')}\`);
  console.log(\`Amount Paid: \${subscription.data.amount_paid}\`);
  
  return subscription.data;
}

// Deposit to lending pool
async function depositToPool() {
  const deposit = await axios.post(\`\${API_URL}/yield/deposit\`, {
    wallet: '0xYourWalletHere...',
    currency: 'USDC',
    amount: '5000000'
  });
  
  console.log(\`Position ID: \${deposit.data.position_id}\`);
  console.log(\`Transaction: \${deposit.data.tx_hash}\`);
  
  // Check current pool stats
  const pools = await axios.get(\`\${API_URL}/yield/pools\`);
  const usdcPool = pools.data.pools.find((p: any) => p.symbol === 'USDC');
  console.log(\`Current APY: \${(usdcPool.base_apy_bps / 100).toFixed(2)}%\`);
  
  return deposit.data;
}`,

  python: `# Execute a batch payout with compliance checks
import requests
import os

API_URL = '${apiUrl}'

def execute_batch_payout():
    # Step 1: Check compliance for all recipients
    recipients = [
        {'wallet': '0x1234567890abcdef1234567890abcdef12345678', 'amount': 1000},
        {'wallet': 'So11111111111111111111111111111111111111112', 'amount': 500}
    ]

    for recipient in recipients:
        compliance = requests.post(
            f'{API_URL}/compliance/check',
            json={'wallet_address': recipient['wallet']}
        )
        print(f"Compliance: {compliance.json()['status']}")

    # Step 2: Execute batch payout
    payout = requests.post(
        f'{API_URL}/payouts',
        json={
            'funding_currency': 'USDC',
            'funding_wallet': '0xYourFundingWalletAddressHere000000000000000',
            'payouts': [
                {
                    'to_wallet': recipients[0]['wallet'],
                    'currency': 'USDC',
                    'amount': recipients[0]['amount'],
                    'destination_chain': 'ARC'
                },
                {
                    'to_wallet': recipients[1]['wallet'],
                    'currency': 'USDC',
                    'amount': recipients[1]['amount'],
                    'destination_chain': 'SOLANA'
                }
            ],
            'require_compliance': True
        }
    )

    result = payout.json()
    print(f"Job ID: {result['job_id']}")
    print(f"Status: {result['status']}")
    print(f"Total: {result['total_funding_used']} USDC")
    
    # Step 3: Check audit logs
    logs = requests.get(f'{API_URL}/audit/logs?type=payout&limit=5')
    print(f"Recent transactions: {logs.json()['total']}")

    return result

# Get real-time exchange rates
def get_exchange_rates():
    response = requests.get(f'{API_URL}/rates?base=USDC')
    data = response.json()
    
    print('Exchange Rates:')
    print(f"USDC → EURC: {data['rates']['EURC']}")
    print(f"USDC → USYC: {data['rates']['USYC']}")
    print(f"Source: {data['source']}")
    
    return data['rates']

# Cross-chain USDC transfer via CCTP
def transfer_to_solana():
    transfer = requests.post(
        f'{API_URL}/cctp/transfer',
        json={
            'amount': 1000,
            'toAddress': 'So11111111111111111111111111111111111111112',
            'destinationChain': 'SOLANA',
            'fromWallet': '0xYourFundingWalletAddressHere000000000000000'
        }
    )

    result = transfer.json()
    print(f"Transfer initiated: {result['burnTxHash']}")
    print(f"Message hash: {result['messageHash']}")
    print(f"Status: {result['status']}")
    print(f"Estimated time: {result['estimatedTime']}")
    
    return result

# ZynFX-Yield: Issue corporate bond
def issue_bond():
    # Step 1: Register as issuer
    issuer = requests.post(
        f'{API_URL}/yield/issuer/register',
        json={
            'issuer_wallet': '0xYourWalletHere...',
            'legal_name': 'Acme Corp',
            'jurisdiction': 'US',
            'contact_email': 'treasury@acme.com'
        }
    )
    issuer_data = issuer.json()
    print(f"Issuer ID: {issuer_data['issuer_id']}")

    # Step 2: Issue bond
    bond = requests.post(
        f'{API_URL}/yield/bonds/issue',
        json={
            'issuer_id': issuer_data['issuer_id'],
            'issuer_wallet': '0xYourWalletHere...',
            'currency': 'USDC',
            'series_name': 'Corp90D',
            'principal_per_unit': '1000000',
            'units_offered': 5000,
            'coupon_rate_bps': 500,
            'coupon_frequency': 'MONTHLY',
            'tenor_days': 90,
            'subscription_start': '2025-11-15T00:00:00Z',
            'subscription_end': '2025-12-15T00:00:00Z',
            'transferability': 'SOULBOUND'
        }
    )
    
    bond_data = bond.json()
    print(f"Bond ID: {bond_data['bond_id']}")
    print(f"NFT Contract: {bond_data['nft_contract']}")
    print(f"Maturity: {bond_data['maturity_date']}")
    
    return bond_data

# Subscribe to bond and receive NFT
def subscribe_to_bond(bond_id):
    subscription = requests.post(
        f'{API_URL}/yield/bonds/{bond_id}/subscribe',
        json={
            'investor_wallet': '0xInvestorWallet...',
            'units': 100,
            'payment_currency': 'USDC',
            'require_compliance': True
        }
    )
    
    sub_data = subscription.json()
    print(f"NFT Token IDs: {', '.join(sub_data['nft_token_ids'])}")
    print(f"Amount Paid: {sub_data['amount_paid']}")
    
    return sub_data

# Deposit to lending pool
def deposit_to_pool():
    deposit = requests.post(
        f'{API_URL}/yield/deposit',
        json={
            'wallet': '0xYourWalletHere...',
            'currency': 'USDC',
            'amount': '5000000'
        }
    )
    
    deposit_data = deposit.json()
    print(f"Position ID: {deposit_data['position_id']}")
    print(f"Transaction: {deposit_data['tx_hash']}")
    
    # Check current pool stats
    pools = requests.get(f'{API_URL}/yield/pools')
    pools_data = pools.json()
    usdc_pool = next((p for p in pools_data['pools'] if p['symbol'] == 'USDC'), None)
    if usdc_pool:
        print(f"Current APY: {usdc_pool['base_apy_bps'] / 100:.2f}%")
    
    return deposit_data`,
})

export function CodeExamples() {
  const [activeTab, setActiveTab] = useState("typescript")
  const [apiUrl, setApiUrl] = useState('http://localhost:4000/v1')

  useEffect(() => {
    // Get the API URL on client-side
    setApiUrl(API_FULL_URL)
  }, [])

  const examples = getExamples(apiUrl)

  return (
    <section id="examples" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6">Code Examples</h2>
      <p className="text-muted-foreground mb-4">
        Real-world examples using the ZynFX API with TypeScript and Python. All examples use the actual endpoints running on <code className="text-primary">{apiUrl.replace('/v1', '')}</code>.
      </p>
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-4">
        <p className="text-sm text-muted-foreground">
          <strong className="text-primary">New:</strong> Examples now include ZynFX-Yield money market operations - 
          bond issuance, NFT certificates, and lending pools. Scroll down to see yield examples.
        </p>
      </div>
      <Card className="border-border/50 overflow-hidden">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full justify-start rounded-none border-b bg-muted/50">
            <TabsTrigger value="typescript">TypeScript</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
          </TabsList>
          <TabsContent value="typescript" className="p-0 m-0">
            <SyntaxHighlighter
              language="typescript"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                borderRadius: 0,
                fontSize: '0.875rem',
                lineHeight: '1.5'
              }}
              showLineNumbers
            >
              {examples.typescript}
            </SyntaxHighlighter>
          </TabsContent>
          <TabsContent value="python" className="p-0 m-0">
            <SyntaxHighlighter
              language="python"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                borderRadius: 0,
                fontSize: '0.875rem',
                lineHeight: '1.5'
              }}
              showLineNumbers
            >
              {examples.python}
            </SyntaxHighlighter>
          </TabsContent>
        </Tabs>
      </Card>
    </section>
  )
}
