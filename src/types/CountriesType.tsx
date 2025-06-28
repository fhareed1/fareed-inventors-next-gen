// TypeScript export interfaces
export interface CountryName {
  common: string;
  official: string;
  nativeName?: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
}

export interface CountryFlags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Country {
  name: CountryName;
  capital?: string[];
  region: string;
  flags: CountryFlags;
  population: number;
}

export type SortField = "name" | "population" | "";
export type SortOrder = "asc" | "desc";

// Error Component
export interface ErrorDisplayProps {
  error: string;
}

export interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export interface RegionFilterProps {
  regions: string[];
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

export interface SortButtonProps {
  field: SortField;
  currentSortBy: SortField;
  sortOrder: SortOrder;
  onSort: (field: SortField) => void;
  children: React.ReactNode;
}

// Country Card Component
export interface CountryCardProps {
  country: Country;
}

export interface CountriesGridProps {
  countries: Country[];
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface HeaderProps {
  searchTerm: string;
  selectedRegion: string;
  regions: string[];
  sortBy: SortField;
  sortOrder: SortOrder;
  resultCount: number;
  totalCount: number;
  onSearchChange: (term: string) => void;
  onRegionChange: (region: string) => void;
  onSort: (field: SortField) => void;
}