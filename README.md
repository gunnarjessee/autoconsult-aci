# AutoInspect Pro - Pre-Purchase Vehicle Inspections

A modern React application for professional pre-purchase vehicle inspection services built with Vite.

## Features

- **Professional Landing Page**: Clean, automotive-themed design focused on C2C transactions
- **Inspection Services Showcase**: Four comprehensive inspection services using ACDelco standards
- **Consumer Protection Focus**: Emphasizes the importance of professional inspections for private sales
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Tailwind CSS**: Utility-first styling for rapid development and consistent design
- **Modern Tech Stack**: React 19 with Vite for fast development and building

## Inspection Services Offered

- **Complete Vehicle Inspection**: Full ACDelco-certified inspection covering all major systems
- **Safety Systems Check**: Comprehensive evaluation of safety features and systems
- **History & Documentation**: VIN verification, title check, and maintenance records review
- **Test Drive Analysis**: Professional road test and performance evaluation

## Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd autoconsult
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Tailwind CSS v4 Setup

This project uses Tailwind CSS v4 with the new `@import "tailwindcss"` syntax. The configuration includes:

- `@tailwindcss/postcss` plugin for PostCSS integration
- Custom component classes defined in `@layer components`
- Responsive utilities for mobile-first design
- Custom color palette and spacing

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Tech Stack

- **React 19** - Latest React with modern features
- **Vite** - Fast build tool and development server
- **Tailwind CSS v4** - Latest utility-first CSS framework with improved performance
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing with Autoprefixer and Tailwind PostCSS plugin

## Project Structure

```
autoconsult/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images and media
│   ├── App.jsx      # Main application component
│   ├── App.css      # Application styles
│   ├── main.jsx     # Application entry point
│   └── index.css    # Global styles
├── package.json     # Dependencies and scripts
└── vite.config.js   # Vite configuration
```
