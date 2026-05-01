# Film Collection

A modern Angular application for browsing and managing a personal film collection. Search films by title, view detailed information, and mark your favorites.

## Features

- Browse a list of films with poster, title, year, genre, and rating
- Search films by title in real-time
- Mark/unmark films as favorites
- View full film details on a dedicated page
- Responsive layout with header, breadcrumbs, and footer on every page

## Tech Stack

- Angular 21 (standalone components, signals, new control flow)
- TypeScript (strict mode)
- SCSS

## How to Run

### Prerequisites

- Node.js (v18+)
- Angular CLI: `npm install -g @angular/cli`

### Install dependencies

```bash
npm install
```

### Start development server

```bash
ng serve
```

Open your browser at `http://localhost:4200/`

### Build for production

```bash
ng build
```

Build artifacts will be in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── core/               # Layout, shared components (header, footer, breadcrumbs), services, models
│   ├── features/           # Feature pages (home, film-detail, about)
│   └── shared/             # Reusable directives and pipes
└── public/
    └── films.json          # Film data
```
