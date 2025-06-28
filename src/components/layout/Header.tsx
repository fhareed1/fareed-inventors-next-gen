import type { HeaderProps } from "@/types/CountriesType";
import { Globe } from "lucide-react";
import { SearchBar } from "../filters/SearchBar";
import { RegionFilter } from "../filters/RegionFilter";
import { SortButton } from "../filters/SortButton";

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  selectedRegion,
  regions,
  sortBy,
  sortOrder,
  resultCount,
  totalCount,
  onSearchChange,
  onRegionChange,
  onSort
}) => (
  <div className="bg-white shadow-md border-b">
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center gap-3 mb-6">
        <Globe className="w-8 h-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-800">Countries Explorer</h1>
      </div>
      
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />

        <div className="flex gap-3 flex-wrap">
          <RegionFilter 
            regions={regions} 
            selectedRegion={selectedRegion} 
            onRegionChange={onRegionChange} 
          />

          <SortButton
            field="name"
            currentSortBy={sortBy}
            sortOrder={sortOrder}
            onSort={onSort}
          >
            Name
          </SortButton>
          
          <SortButton
            field="population"
            currentSortBy={sortBy}
            sortOrder={sortOrder}
            onSort={onSort}
          >
            Population
          </SortButton>
        </div>
      </div>

      {/* Results Count */}
      <div className="mt-4 text-sm text-gray-600">
        Showing {resultCount} of {totalCount} countries
      </div>
    </div>
  </div>
);