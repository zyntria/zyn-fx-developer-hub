# ZynFX Developer Hub - API Auto-Detection

## Summary

Updated the ZynFX Developer Hub documentation site to automatically display the correct API URL based on the environment:

- **Local Development**: Shows `http://localhost:4000` when running on localhost
- **Production**: Shows `https://arc-fx-infrastructure-api-production-31b7.up.railway.app` when deployed
- **Manual Override**: Can be overridden with `NEXT_PUBLIC_API_URL` environment variable

## What Changed

This is a **documentation/landing page** that shows developers how to use the ZynFX API. The updates ensure that:

1. ✅ Code examples show the correct API URL for the current environment
2. ✅ API endpoint documentation displays the right base URL
3. ✅ Zero configuration needed - works automatically in both local and production

## Files Updated

### 1. New: `lib/api-config.ts`
Created central configuration for API URL detection:

```typescript
export const getAPIUrl = () => {
  // Priority: env var > detect localhost > production default
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL
  }
  
  if (typeof window !== 'undefined') {
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1' ||
                       window.location.hostname === '0.0.0.0'
    
    if (isLocalhost) return 'http://localhost:4000'
  }
  
  return 'https://arc-fx-infrastructure-api-production-31b7.up.railway.app'
}
```

### 2. Updated: `components/code-examples.tsx`
- ✅ TypeScript code examples now use dynamic API URL
- ✅ Python code examples now use dynamic API URL
- ✅ Documentation text shows correct URL

**Before:**
```typescript
const API_URL = 'http://localhost:4000/v1';
```

**After:**
```typescript
const API_URL = '${apiUrl}'; // Dynamic based on environment
```

### 3. Updated: `components/endpoints-grid.tsx`
- ✅ Base URL documentation is now dynamic
- ✅ Shows correct URL based on where the site is running

**Before:**
```typescript
Base URL: <code>http://localhost:4000</code>
```

**After:**
```typescript
Base URL: <code>{apiUrl}</code> // Dynamic
```

## How It Works

### For Developers Viewing the Docs

When developers visit your documentation site:

**On localhost** (`http://localhost:3000`):
- Code examples show: `const API_URL = 'http://localhost:4000/v1'`
- Base URL shows: `http://localhost:4000`
- Perfect for local testing with local API

**In production** (e.g., `https://docs.zynfx.com`):
- Code examples show: `const API_URL = 'https://arc-fx-infrastructure-api-production-31b7.up.railway.app/v1'`
- Base URL shows: `https://arc-fx-infrastructure-api-production-31b7.up.railway.app`
- Developers can copy-paste and it works immediately

## Deployment

### GitHub Push

```bash
cd zynfx-api-ui
git init
git add .
git commit -m "Initial commit: ZynFX Developer Hub with auto API detection"
git branch -M main
git remote add origin https://github.com/OpMentis-Ai/zyn-fx-developer-hub.git
git push -u origin main
```

### Vercel Deployment

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import the GitHub repository
   - Vercel will auto-detect Next.js

2. **No Environment Variables Needed:**
   - The site will automatically detect it's in production
   - API URLs in docs will show production Railway backend
   - Zero configuration required! 🎉

3. **Optional: Custom API URL**
   If you want to override, add in Vercel:
   ```
   NEXT_PUBLIC_API_URL=https://your-custom-api.com
   ```

## Testing

### Test Locally

```bash
npm run dev
# Visit http://localhost:3000
# Check code examples - should show http://localhost:4000
```

### Test in Production

```bash
# Deploy to Vercel
vercel

# Visit your production URL
# Check code examples - should show Railway production URL
```

### Test Manual Override

```bash
# Create .env.local
echo "NEXT_PUBLIC_API_URL=https://custom-api.com" > .env.local

npm run dev
# Should show custom URL in examples
```

## For Developers Using This Documentation

### Example: Copy Code from Docs (TypeScript)

When visiting the production docs, developers see:

```typescript
import axios from 'axios';

const API_URL = 'https://arc-fx-infrastructure-api-production-31b7.up.railway.app/v1';

async function executeBatchPayout() {
  const payout = await axios.post(`${API_URL}/payouts`, {
    funding_currency: 'USDC',
    funding_wallet: '0xYourWallet...',
    payouts: [ /* ... */ ],
    require_compliance: true
  });
  
  return payout.data;
}
```

They can copy this code and it **works immediately** - no URL changes needed!

### Example: Copy Code from Docs (Python)

```python
import requests

API_URL = 'https://arc-fx-infrastructure-api-production-31b7.up.railway.app/v1'

def execute_batch_payout():
    payout = requests.post(
        f'{API_URL}/payouts',
        json={
            'funding_currency': 'USDC',
            'funding_wallet': '0xYourWallet...',
            'payouts': [ # ... ],
            'require_compliance': True
        }
    )
    return payout.json()
```

Copy, paste, run! 🚀

## Benefits

1. **Better Developer Experience**: Code examples work immediately when copied
2. **No Confusion**: Developers see the right URL for their environment
3. **Zero Config**: Works in local and production without setup
4. **Flexible**: Can still override with environment variables
5. **Professional**: Documentation matches the deployment environment

## API Endpoints

- **Production API**: https://arc-fx-infrastructure-api-production-31b7.up.railway.app
- **Production Docs**: https://arc-fx-infrastructure-api-production-31b7.up.railway.app/docs
- **Local API**: http://localhost:4000
- **Local Docs**: http://localhost:4000/docs

## Next Steps

1. ✅ Push to GitHub: `https://github.com/OpMentis-Ai/zyn-fx-developer-hub.git`
2. ✅ Deploy to Vercel (no config needed)
3. ✅ Share the docs URL with developers
4. ✅ They can copy-paste working code examples!

---

**Status**: ✅ Complete and ready to push to GitHub!

