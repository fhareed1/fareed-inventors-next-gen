import type { RegionFilterProps } from "@/types/CountriesType";
import { ChevronDown } from "lucide-react";

export const RegionFilter: React.FC<RegionFilterProps> = ({
  regions,
  selectedRegion,
  onRegionChange,
}) => (
  <div className="relative">
    <select
      value={selectedRegion}
      onChange={(e) => onRegionChange(e.target.value)}
      className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
    >
      <option value="">All Regions</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
  </div>
);
