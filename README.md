# Jungle Jim's Store and 3D Portfolio

A dependency-free, GitHub Pages-ready storefront for Background People products.

## Local preview

Run `preview.ps1`, or serve this folder with any local web server. Do not open
`index.html` directly when testing YouTube: YouTube requires an HTTP origin for
embedded playback and rejects `file:///` pages with player error 153.

## Publish on GitHub Pages

1. Upload the contents of this folder to a GitHub repository.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**, then select `main` and `/ (root)`.

## Update the catalog

Edit `products.js`. Counts, filters, cards, search results, and categories update automatically.

Products link to Gumroad for authoritative descriptions, licensing, pricing and checkout. The catalog is a static snapshot because Gumroad storefront pages do not expose a browser-safe public catalog API for an unauthenticated GitHub Pages site.
