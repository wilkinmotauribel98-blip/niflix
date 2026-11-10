# NIFLIX — Online Store (Ecommerce App)

Ecommerce frontend built with React + Vite + Tailwind. Catalog, live search, filters, persistent cart and a simulated 4-step checkout. Data from `dummyjson.com`.

**Live demo:** https://niflix-eight.vercel.app
**Repository:** https://github.com/wilkinmotauribel98-blip/niflix

> Portfolio project. No real backend, authentication or payments — checkout is simulated.

## Screenshots

![Home](docs/home.png)
![Shop](docs/shop.png)
![Categories](docs/categories.png)
![Category](docs/category.png)
![Search](docs/search.png)
![Product](docs/product.png)
![Cart](docs/cart.png)
![Checkout](docs/checkout.png)
![Payment](docs/payment.png)
![Review](docs/review.png)
![Confirmation](docs/done.png)
![Support](docs/support.png)

## Technologies

- React 18.3, React Router 6.26, Vite 5.4
- Tailwind CSS 4.3 + @tailwindcss/vite
- zustand 4.5 (only the cart persists in `localStorage` as `client-storage`)
- react-hook-form 7.86, libphonenumber-js (DO phone validation)
- Images optimized with `wsrv.nl` (centralized `optimizedImg` helper)

## Features

- Home: hero carousel, category shortcuts, new arrivals, best sellers, newsletter
- Shop `/shop` with pagination; Categories page with product counts
- Category detail with price/brand/rating filters and a `Clear All` button
- Product detail: discount, stock, weight, dimensions, minimum order, quantity, `Add to cart` and `Buy Now`, warranties, tabs (Description/Specifications/Reviews) and recommendations
- Live search with suggestions (`/results/search?q=`); no persisted search history
- Cart: add / quantity / remove, drawer + page, 18% tax (`TAX_RATE`), persisted in `localStorage`, related products
- Checkout with nested routes: `shipping → payment → review → done`, forms validated with react-hook-form, live card type detection, order number with copy button
- Responsive: desktop Header + mobile BottomNavbar, skeletons, lazy routes with `Suspense`
- Support page with help search, 6 topics and 24/7 contact

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

No `.env` is needed. The API URL is hardcoded to `https://dummyjson.com` in `src/api/products.js`.

## Architecture

```text
src/
  App.jsx            # routes + lazy pages, base /
  main.jsx           # BrowserRouter + StrictMode
  api/products.js    # fetchProduct, fetchCategories, searchProducts
  hooks/
    useFetch.js      # generic fetch + AbortController
    useProducts.js   # home products (1 h in-memory cache, no persistence)
    useCart.js       # cart {id -> product}, 0.18 tax (TAX_RATE, persist: client-storage)
    useCheckout.js   # checkout shipping + payment data (no persistence)
  context/
    PageContext.jsx  # current page based on location
  pages/             # Home, Shop, Category, Categories, Product, Results, Cart, Checkout, Support, NotFound
  components/
    cart/ checkout/ product/ category/ shop/ results/ support/
    layout/header + bottomNavbar + footer/
    ui/              # Button, Badge, Skeleton, Suggestions, AddToCart, etc.
                     # (no Icon/Sprite components: icons are inline <svg><use>
                     #  with publicUrl() + sprites in public/: sprite-core/extra, payment-icons)
  sections/          # Hero, BestSellers, NewArrivals, TrustBar, Newsletter, etc.
  utils/
    loading.js             # preloadImages, minDelay
    optimizedImg.js        # optimized URLs via wsrv.nl
    publicUrl.js           # public URLs with import.meta.env.BASE_URL
    location.js            # countries (Intl) + DO cities without heavy dependencies
    getCardType.js         # brand detection (visa, mastercard, amex…)
    detectCardTypeLive.js  # live detection while typing
```

Routes: served from `/` (`vite.config.js: base`), with Vercel rewriting unknown paths to `index.html` (`vercel.json`). Checkout uses a nested `<Outlet/>` with a redirect to the `shipping` step.

State: zustand + persist, no Redux. Forms with react-hook-form.

## What I would do in production

1. Real backend + Stripe (never store card data — today checkout is only a demo)
2. Authentication, orders, coupons, wishlist, admin panel
3. Harden guards between checkout steps and broaden `ErrorBoundary` and empty/error state coverage
4. `eslint + prettier + vitest + Playwright`, `.env` for the API URL, remove dead code
5. SSR/prerender + JSON-LD, robots/sitemap, i18n
6. Split the main bundle (today it exceeds the 500 kB Vite warning)

## Known limitations

- Public `dummyjson.com` data, total `194` hardcoded in `RenderAllProducts.jsx`
- No tests or linter; UI is in English
- Images with `loading="lazy"` (and `eager` + `fetchPriority="high"` on hero/main product)
