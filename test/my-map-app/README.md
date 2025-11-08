# Map Interface App

A React-based interactive map interface that displays location points with friend activity overlays.

## Features

- 📍 Interactive map with location markers
- 🔒 Privacy-focused location cards showing friend activity
- 🗺️ OpenStreetMap integration
- 📱 Mobile-friendly responsive design
- 🎨 Modern UI with Tailwind CSS
- 🔄 Toggle between Map and List views

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Navigate to the project directory:
```bash
cd my-map-app
```

2. Install dependencies:
```bash
npm install --include=dev
```

## Running the App

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

## Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
my-map-app/
├── src/
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles with Tailwind
├── public/             # Static assets
├── index.html          # HTML template
└── package.json        # Dependencies and scripts
```

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **OpenStreetMap** - Map provider

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Changing Map Location

Edit the OpenStreetMap iframe source in `src/App.jsx`:
```jsx
<iframe
  src="https://www.openstreetmap.org/export/embed.html?bbox=YOUR_COORDINATES"
  // ...
/>
```

### Adding Location Points

Modify the `locations` array in `src/App.jsx`:
```jsx
const locations = [
  { x: 30, y: 25, count: 5, bg: 'image-url' },
  // Add more locations
];
```

## Troubleshooting

### Port already in use
If port 5173 is already in use, Vite will automatically try the next available port.

### Dependencies not installing
Make sure to use `npm install --include=dev` to install both regular and dev dependencies.

## License

This project is private and not licensed for public use.
