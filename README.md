# BrightWorld — Lighting Store

[![CI](https://github.com/agent-mino/BrightWorld/actions/workflows/ci.yml/badge.svg)](https://github.com/agent-mino/BrightWorld/actions/workflows/ci.yml)

**Live:** https://bright-world.vercel.app

A front-end e-commerce storefront for lighting products, built with **React 18** and **React Router**.
Demonstrates multi-route SPA architecture, shared state with React Context, and persistent cart state via `localStorage`.

## Features

- **Six product categories** (chandeliers, smart lights, lamps, spotlights, bulbs & kits, decoration lights),
  each with its own route, plus an exclusive collection, a brands page and a gallery
- **Home page** with a product carousel, category cards and scroll-reveal animations (`IntersectionObserver`)
- **Cart:** add and remove items, see the total, and check out. Cart state is shared through React Context and
  **saved to `localStorage`**, so it survives refreshes.
- **Customer feedback** form whose submissions are held in a second context
- About, contact and 404 pages; responsive layout

## Structure

```
src/
  App.jsx              routes, wrapped in Cart and Feedback providers
  pages/               home, products/<category>, carts, checkout, feedback, gallery, brands, about, contacts, error
  components/          navbar, footer, carousel, product/category/cart cards, feedback
  context/             cartContext (persisted), feedbackContext
  database/            product catalogue per category (static data)
  animation/           useSlideAnimation, scroll-reveal hook
```

## Run locally

```bash
npm install
npm start        # http://localhost:3000
npm test         # storefront render + cart persistence tests
npm run build    # production build
```

CI runs the tests and a production build (with warnings treated as errors) on every push. Deployed on Vercel.
