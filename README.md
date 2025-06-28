# REST Countries Explorer 🌍

A modern, responsive web application that displays information about countries around the world using the REST Countries API. Built with cutting-edge frontend technologies for optimal performance and user experience.

## ✨ Features

- **Country Display**: Browse countries in an elegant card-based layout
- **Search Functionality**: Filter countries by name with real-time search
- **Region Filtering**: Filter countries by geographical regions (Africa, Europe, Asia, etc.)
- **Population Sorting**: Sort countries by population in ascending or descending order
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, intuitive interface built with Shadcn/ui components
- **Performance Optimized**: Efficient data fetching and rendering with Vite

## 🛠️ Tech Stack

- **Framework**: [Vite](https://vitejs.dev/) - Lightning fast build tool
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**:
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
  - [Shadcn/ui](https://ui.shadcn.com/) - Beautiful, accessible component library
- **Data Fetching**: Native Fetch API
- **API**: [REST Countries API](https://restcountries.com/) v3.1

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/fhareed1/fareed-inventors-next-gen.git
cd country_explorer_app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── LoadingSpinner.tsx    # Loading state component
│   │   ├── ErrorDisplay.tsx      # Error handling component
│   │   └── Pagination.tsx        # Pagination controls
│   ├── filters/
│   │   ├── SearchBar.tsx         # Search input component
│   │   ├── RegionFilter.tsx      # Region dropdown filter
│   │   └── SortButton.tsx        # Sort controls
│   ├── country/
│   │   ├── CountryCard.tsx       # Individual country card
│   │   └── CountriesGrid.tsx     # Grid layout for countries
│   └── layout/
│       └── Header.tsx            # App header with filters
├── types/
│   └── country.ts                # TypeScript type definitions
└── pages/
    └── CountriesExplorer.tsx     # Main application component
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production

## 🌐 API Integration

The app fetches data from the REST Countries API:

- **Endpoint**: `https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population`
- **Fields Retrieved**:
  - Country name (common and official)
  - Capital city
  - Region
  - Population
  - Flag (SVG and PNG formats)

## 🎯 Core Features Implementation

### Country Cards

Each country is displayed in a responsive card showing:

- Country flag
- Country name
- Capital city
- Region
- Formatted population count

### Search & Filter

- **Search Bar**: Real-time filtering by country name
- **Region Filter**: Dropdown to filter by geographical regions
- **Population Sort**: Toggle between ascending/descending population order

### Region Filtering

- Dynamic dropdown populated with unique regions from API data
- Instant filtering without page reload

### Performance Features

- Debounced search input to reduce API calls
- Efficient filtering and sorting algorithms
- Optimized re-renders with proper React patterns

### Pagination

- Configurable items per page
- Efficient rendering of large datasets
- Automatic page reset when filters change
- Lazy loading of country flags

## 🎨 UI/UX Features

- **Dark/Light Mode**: Toggle between themes (if implemented)
- **Loading States**: Skeleton loaders during data fetching
- **Error Handling**: Graceful error messages for failed requests
- **Mobile First**: Responsive design that works on all screen sizes
- **Accessibility**: ARIA labels and keyboard navigation support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [REST Countries API](https://restcountries.com/) for providing comprehensive country data
- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first styling approach
- [Vite](https://vitejs.dev/) for the blazing fast development experience

## 📧 Contact

Your Name - folorunshofareed0@gmail.com

Project Link: [https://github.com/fhareed1/fareed-inventors-next-gen]

Live Demo: [https://fareed-inventors-next-gen.vercel.app/]
