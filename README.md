# e-plantShopping

Paradise Nursery is a responsive React and Redux Toolkit shopping application for browsing houseplants and managing a dynamic shopping cart.

## Features
- Landing page with company information and Get Started button
- 12 plants grouped into four categories
- Add-to-cart buttons that disable after selection
- Redux cart state with live item count
- Quantity increase/decrease, delete, subtotals, and grand total
- Responsive layout for desktop and mobile

## Run locally
```bash
npm install
npm run dev
```
Open the local URL shown by Vite, normally `http://localhost:5173`.

For production preview:
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages
1. Create a public GitHub repository named `e-plantShopping`.
2. Push this project to its `main` branch.
3. Run `npm install` and `npm run deploy`.
4. In GitHub, open Settings > Pages and confirm the source is the `gh-pages` branch.
5. Your URL will normally be `https://YOUR-USERNAME.github.io/e-plantShopping/`.
