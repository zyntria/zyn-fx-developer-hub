/**
 * ZynFX API Configuration
 * Auto-detects the correct API URL for documentation examples
 */

// Auto-detect API URL based on environment
export const getAPIUrl = () => {
  // If explicitly set via environment variable, use that
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL
  }
  
  // Check if we're running on localhost (client-side only)
  if (typeof window !== 'undefined') {
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1' ||
                       window.location.hostname === '0.0.0.0'
    
    if (isLocalhost) {
      return 'http://localhost:4000'
    }
  }
  
  // Default to production API
  return 'https://arc-fx-infrastructure-api-production-31b7.up.railway.app'
}

// Export the base URL for documentation examples
export const API_BASE_URL = typeof window !== 'undefined' ? getAPIUrl() : 'http://localhost:4000'
export const API_VERSION = 'v1'
export const API_FULL_URL = `${API_BASE_URL}/${API_VERSION}`

// For server-side rendering, use a placeholder
export const API_DOCS_URL = typeof window !== 'undefined' 
  ? `${getAPIUrl()}/docs`
  : 'http://localhost:4000/docs'

