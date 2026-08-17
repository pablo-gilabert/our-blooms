# Our Blooms

Our Blooms is a responsive floral-design website built as a React + TypeScript single-page application. The project is organized around reusable components, typed data objects, React Router pages, and CSS Modules for component/page-specific styling.

## Requirements

Before running the project, make sure the following tools are installed:

- Node.js
- npm

Node.js includes npm, so installing Node.js is enough.

It is recommended to use a current LTS version of Node.js.

You can verify the installation with:

```bash
node -v
npm -v

## Technology stack

- **React 19** — component-based UI.
- **TypeScript 6** — static typing for components, data and configuration.
- **Vite 8** — development server and production build tool.
- **React Router DOM 7** — client-side navigation between Home, Gallery and About.
- **React Icons** — hamburger menu icon used by the mobile navigation.
- **CSS Modules** — locally scoped styles for components and pages.
- **Google Fonts / Inter** — global typography loaded from `src/index.css`.
- **ESLint** — JavaScript/TypeScript, React Hooks and React Refresh linting.
- **React Compiler preset** — enabled in the Vite/Babel configuration.
- **Cloudinary** — remote image hosting used by the content displayed throughout the site.

## Application startup

The browser loads `index.html`, which contains the `#root` element and loads `src/main.tsx`.

`main.tsx` creates the React root, imports the global stylesheet, enables `StrictMode`, and wraps the application in `BrowserRouter`. This is important because every `NavLink`, `Link`, `Routes` and `useLocation` call depends on React Router context.

The root component rendered by `main.tsx` is `App`.

## Application flow

```text
index.html
   ↓
src/main.tsx
   ↓
BrowserRouter
   ↓
App.tsx
   ├── ScrollToTop
   ├── Navbar (mobile)
   ├── NavbarDesktop (desktop)
   └── Routes
       ├── /        → Home
       ├── /gallery → Gallery
       └── /about   → About
```

## App and routing

`src/App.tsx` is the application's routing shell.

It renders both navigation components, but `App.module.css` controls which one is visible:

- below `768px`: `Navbar` is displayed;
- from `768px`: `NavbarDesktop` is displayed.

Both navigation containers are sticky and remain above page content through the shared `z-index`.

### Route table

| Route | Page | Main responsibility |
|---|---|---|
| `/` | `Home` | Landing page, introduction, services and closing CTA |
| `/gallery` | `Gallery` | Arrangement catalogue and gallery-specific services |
| `/about` | `About` | Brand story, founder information and history |

## Navigation

### Mobile: `components/Navbar`

`Navbar.tsx` owns the hamburger-menu state.

The important flow is:

1. `menuOpen` stores whether the dropdown is open.
2. Clicking the hamburger calls `toggleMenu()`.
3. `navbarOpen` is conditionally added to the root element.
4. `Navbar.module.css` uses `.navbarOpen .dropdown` to expand the menu.
5. A document-level `mousedown` listener closes the menu when the click happens outside the navbar.
6. Clicking a `NavLink` closes the menu and calls `window.scrollTo(0, 0)`.

The last point matters even when the user clicks the route they are already visiting: React Router does not need to change the route, but the click handler still runs and resets the viewport.

### Desktop: `components/NavbarDesktop`

`NavbarDesktop.tsx` has no hamburger state. All three links are permanently visible.

Its `handleNavigation()` calls `window.scrollTo(0, 0)` so clicking an already-active link also returns the user to the top.

### Route-change scrolling: `components/ScrollToTop`

`ScrollToTop.tsx` watches `location.pathname`. When the route changes, it calls `window.scrollTo(0, 0)`.

This means navigation has two complementary behaviors:

- **route changes:** handled centrally by `ScrollToTop`;
- **clicking the current route:** handled directly by the navbar click handler.

## Global styling

`src/index.css` is the global stylesheet.

It contains:

- Google Fonts import;
- CSS variables for button color, font family and font weights;
- box-model reset;
- smooth scrolling;
- body typography;
- media sizing defaults;
- inherited form typography;
- button cursor behavior;
- link reset;
- list reset.

If the project's global typography, spacing reset or design tokens need to change, start here.

## Components

### `Header`

`Header.tsx` contains three image compositions:

- `.logo` for mobile;
- `.logoTablet` for tablet;
- `.logoDesktop` for desktop.

`Header.module.css` controls which composition is visible at `768px` and `1280px`.

If the hero/header artwork changes, this is the component to edit. If only sizing or responsive positioning changes, edit `Header.module.css`.

### `CallToAction`

`CallToAction.tsx` is a reusable content section with four props:

- `title`;
- `subtitle`;
- `buttonText`;
- `buttonLink`.

It uses React Router's `Link` for internal navigation.

Both Home and Gallery reuse this component, changing only the content and destination.

### `Footer`

`Footer.tsx` follows the same responsive-artwork pattern as Header:

- mobile image;
- tablet image;
- desktop image.

`Footer.module.css` controls which version is displayed.

### `ServiceCard` + `Services`

These two components form the reusable service system.

```text
Home/Gallery
    ↓
Services
    ↓ map()
ServiceCard
```

`Services.tsx` receives a `Service[]` and an optional `variant`.

`ServiceCard.tsx` receives one service and uses the variant to determine its presentation:

- `home`: renders the numeric service id;
- `gallery`: does not render the id and receives the `cardGallery` CSS class.

The shared `Service` interface lives in `src/types/Service.ts`.

This design allows the same rendering logic to serve both pages while keeping the two visual presentations in CSS.

### `Arrangements` + `ArrangementsCard`

The arrangement catalogue follows the same list/card pattern:

```text
Gallery
  ↓
Arrangements
  ↓ map()
ArrangementsCard
```

`Arrangements.tsx` imports `data/arrangements.ts`, maps through the records, and renders one `ArrangementsCard` for each item.

`Arrangement.ts` defines the shared data shape.

`Arrangements.module.css` controls the number of columns:

- mobile: one column by default;
- `768px`: two columns;
- `1280px`: three columns.

## Pages

### Home

`pages/Home/Home.tsx` composes:

```text
Header
  ↓
CallToAction (Who We Are)
  ↓
Responsive decorative image
  ↓
What We Do heading/description
  ↓
Services (services.ts, variant="home")
  ↓
Responsive purple-flower image
  ↓
CallToAction (Work With Us)
  ↓
Footer
```

`Home.module.css` owns the page-level layout and responsive decorative-image variants.

### Gallery

`pages/Gallery/Gallery.tsx` composes:

```text
Gallery heading
  ↓
Arrangements
  ↓
Services heading + separator
  ↓
Services (servicesGallery.ts, variant="gallery")
  ↓
CallToAction
  ↓
Footer
```

The Gallery page uses the same `Services` component as Home but supplies a different data array and presentation variant.

### About

`pages/About/About.tsx` contains the brand story directly because the content is page-specific. Its layout is controlled by `About.module.css`.

The main responsive change is the `introGrid`, which places the founder image and founder information side by side on larger screens. The three story images also become a three-column grid from `768px` upward.

## Data layer

`src/data` contains content rather than UI logic.

### `arrangements.ts`

Contains the seasonal arrangement catalogue. Every item follows the `Arrangement` interface.

### `services.ts`

Contains the Home service content. Every item follows the `Service` interface.

### `servicesGallery.ts`

Contains the Gallery-specific service content. It intentionally uses the same `Service` interface so it can be passed directly to the shared `Services` component.

When text, prices or Cloudinary image URLs need to be changed, these data files are the first place to look rather than editing the JSX of the cards.

## Types

`src/types` contains reusable TypeScript contracts:

- `Arrangement.ts` → shape of an arrangement record;
- `Service.ts` → shape of a service record.

Presentation-specific props remain next to the component when they describe behavior unique to that component. For example, `ServiceCardProps` extends `Service` with the `variant` property because `variant` controls presentation rather than being part of the service data itself.

## Where to edit what

| Goal | File to edit |
|---|---|
| Change routes | `src/App.tsx` |
| Change mobile navigation behavior | `src/components/Navbar/Navbar.tsx` |
| Change mobile navbar appearance | `src/components/Navbar/Navbar.module.css` |
| Change desktop navigation behavior | `src/components/NavbarDesktop/NavbarDesktop.tsx` |
| Change desktop navbar appearance | `src/components/NavbarDesktop/NavbarDesktop.module.css` |
| Change global font/design tokens/reset | `src/index.css` |
| Change hero/header artwork | `src/components/Header/Header.tsx` |
| Change hero/header responsive layout | `src/components/Header/Header.module.css` |
| Change Home content/order | `src/pages/Home/Home.tsx` |
| Change Home layout | `src/pages/Home/Home.module.css` |
| Change Gallery content/order | `src/pages/Gallery/Gallery.tsx` |
| Change Gallery layout | `src/pages/Gallery/Gallery.module.css` |
| Change About content/order | `src/pages/About/About.tsx` |
| Change About layout | `src/pages/About/About.module.css` |
| Change CTA content structure | `src/components/CallToAction/CallToAction.tsx` |
| Change CTA appearance | `src/components/CallToAction/CallToAction.module.css` |
| Change footer artwork | `src/components/Footer/Footer.tsx` |
| Change footer responsive layout | `src/components/Footer/Footer.module.css` |
| Change Home services | `src/data/services.ts` |
| Change Gallery services | `src/data/servicesGallery.ts` |
| Change arrangement catalogue | `src/data/arrangements.ts` |
| Change service data shape | `src/types/Service.ts` |
| Change arrangement data shape | `src/types/Arrangement.ts` |
| Change reusable service presentation | `src/components/ServiceCard/ServiceCard.tsx` |
| Change service card styling | `src/components/ServiceCard/ServiceCard.module.css` |
| Change service list mapping | `src/components/Services/Services.tsx` |
| Change arrangement card structure | `src/components/ArrangementsCard/ArrangementsCard.tsx` |
| Change arrangement card styling | `src/components/ArrangementsCard/ArrangementsCard.module.css` |
| Change arrangement responsive grid | `src/components/Arrangements/Arrangements.module.css` |
| Change route-change scroll behavior | `src/components/ScrollToTop/ScrollToTop.tsx` |
| Change Vite/React build setup | `vite.config.ts` |
| Change lint rules | `eslint.config.js` |
| Change TypeScript application settings | `tsconfig.app.json` |

## Responsive strategy

The project follows a mobile-first approach.

The main breakpoints currently used are:

- **default:** mobile;
- **768px:** tablet / medium desktop layout;
- **1280px:** large desktop layout.

Most responsive behavior is implemented through CSS Modules rather than JavaScript viewport checks. This keeps rendering logic stable while CSS decides how the same markup is displayed.

Some components intentionally render separate artwork containers for mobile, tablet and desktop because the supplied artwork itself changes between breakpoints.

## Development commands

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Important architectural rule

When modifying the project, keep the separation between **content**, **presentation**, and **page composition**:

- content → `src/data`;
- shared data contracts → `src/types`;
- reusable UI → `src/components`;
- page composition → `src/pages`;
- global styling → `src/index.css`;
- component/page styling → adjacent `.module.css` files;
- routing → `src/App.tsx`;
- application bootstrap → `src/main.tsx`.

This separation is what makes it possible to change the content of a service without touching its rendering component, or change the Gallery layout without changing the service data.

## Note about comments and JSON files

The commented source version of this documentation package adds explanatory comments without intentionally changing runtime behavior or CSS values. JSON files such as `package.json` and `tsconfig.json` cannot contain JavaScript-style comments while remaining valid JSON, so their explanations are documented here instead of being inserted into the JSON itself.
