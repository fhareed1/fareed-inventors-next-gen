import type { CountriesGridProps } from "@/types/CountriesType";
import { CountryCard } from "./CountryCard";

export const CountriesGrid: React.FC<CountriesGridProps> = ({ countries }) => {
  if (countries.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🌍</div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          No countries found
        </h2>
        <p className="text-gray-500">
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {countries.map((country) => (
        <CountryCard key={country.name?.common} country={country} />
      ))}
    </div>
  );
};
