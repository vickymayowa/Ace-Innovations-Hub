# ShopHub - Product Catalog & Cart

A modern, responsive e-commerce product catalog built with React, TypeScript, and the Fake Store API. Features product browsing, filtering, search, and a fully functional shopping cart with local storage persistence.

## Features

- 📦 **Product Catalog**: Browse products from the Fake Store API
- 🔍 **Search & Filter**: Filter by category and search by product name
- 🛒 **Shopping Cart**: Add/remove items with quantity management
- 💾 **Local Storage**: Cart persists across browser sessions
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile
- 🎨 **Modern UI**: Built with Tailwind CSS and shadcn/ui components
- ⚡ **State Management**: Zustand for efficient global state
- 🌓 **Dark Mode**: Automatic dark mode support

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Zustand** - State management
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Navigation
- **Fake Store API** - Product data


## Setup Instructions

### Prerequisites
- Node.js 16+ and npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

4. Open your browser to `http://localhost:8080`

### Build for Production
```sh
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # App header with search & cart
│   ├── CategoryFilter.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── ProductDetailModal.tsx
│   └── CartSidebar.tsx
├── hooks/              # Custom React hooks
│   └── useProducts.ts  # Product fetching logic
├── store/              # Zustand state management
│   └── useStore.ts     # Global store
├── pages/              # Route pages
│   ├── Index.tsx       # Main product catalog
│   └── NotFound.tsx
└── lib/                # Utilities
    └── utils.ts
```

## How the App Works

### State Management
The app uses **Zustand** for centralized state management:
- **Products**: Fetched from Fake Store API
- **Filters**: Category selection and search query
- **Cart**: Items, quantities, and totals
- **Cart Persistence**: Saved to localStorage automatically

### Key Features

**Product Browsing**
- Products are fetched on load from `https://fakestoreapi.com/products`
- Displayed in a responsive grid with images, titles, prices, and ratings
- Click any product to view detailed information in a modal

**Filtering & Search**
- Filter by category: All, Men's Clothing, Women's Clothing, Electronics, Jewelry
- Search by product name in the header search bar
- Filters work together to refine results

**Shopping Cart**
- Add products from cards or detail modal
- Adjust quantities with +/- buttons
- Remove individual items or clear entire cart
- Cart badge shows total item count
- Total price calculated automatically
- Persisted in localStorage

### API Integration
Uses the [Fake Store API](https://fakestoreapi.com/):
- **Endpoint**: `GET https://fakestoreapi.com/products`
- **Data**: 20 products across 4 categories
- **Fields**: id, title, price, description, category, image, rating

## Assumptions & Notes

- **API Limitation**: The Fake Store API is read-only, so checkout is simulated
- **Local Storage**: Cart data persists only in the same browser
- **Error Handling**: Graceful error states for network failures
- **Loading States**: Skeleton loaders during data fetch
- **Responsive Design**: Mobile-first approach with breakpoints for tablet/desktop
- **Accessibility**: Semantic HTML and ARIA labels for screen readers
