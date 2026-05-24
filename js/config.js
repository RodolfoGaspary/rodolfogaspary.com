/* ============================================================
   Site configuration — single source of truth for keys + contact info.

   IMPORTANT — about "secrets" in static sites:
   This file ships to the browser. Anything inside is publicly readable.
   The Web3Forms access key is PUBLIC BY DESIGN (like a Google Maps key,
   Stripe publishable key, or Mapbox token). The actual security is:

     1. DOMAIN WHITELISTING. Log in to Web3Forms → Settings →
        Domain Whitelisting → add "rodolfogaspary.com" so the key
        only works from your domain.
     2. RATE LIMITING. Web3Forms enforces per-key + per-IP limits.
     3. HONEYPOT FIELD. We include a hidden "botcheck" field.

   For TRUE secrets (API keys that can charge money, DB credentials),
   never put them in the browser. Use a Cloudflare Pages Function
   (functions/<route>.js) and store the secret in
   Cloudflare → Pages → your project → Settings → Environment variables.
   ============================================================ */

window.GASPARY_CONFIG = {
  /* Web3Forms — public access key (whitelist your domain in their dashboard) */
  web3formsKey: "e59636fb-b225-431e-9591-b767aa7fe3b8",

  /* Contact info */
  email:       "info@rodolfogaspary.com",
  phoneE164:   "51913727533",        /* used in wa.me/ links */
  phoneDisplay:"+51 913 727 533",    /* used as visible text */

  /* Brand identity */
  brand:       "Rodolfo Gaspary",
  fromName:    "Sitio rodolfogaspary.com",

  /* Default form notification subject prefix */
  leadSubject: "Nuevo lead"
};
