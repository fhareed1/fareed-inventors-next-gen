import type { SearchBarProps } from "@/types/CountriesType";
import { Search } from "lucide-react";

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => (
  <div className="relative flex-1 max-w-md">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    <input
      type="text"
      placeholder="Search countries..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
    />
  </div>
);
