import type { CountryCardProps } from "@/types/CountriesType";
import { Globe, MapPin, Users } from "lucide-react";

export const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ): void => {
    const target = e.target as HTMLImageElement;
    target.src =
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="60" viewBox="0 0 100 60"><rect width="100" height="60" fill="%23f3f4f6"/><text x="50" y="35" text-anchor="middle" fill="%236b7280" font-size="12">No Flag</text></svg>';
  };

  const formatPopulation = (population: number): string => {
    if (!population) return "N/A";
    return new Intl.NumberFormat().format(population);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Flag */}
      <div className="h-48 overflow-hidden bg-gray-100">
        <img
          src={country.flags?.png || country.flags?.svg}
          alt={country.flags?.alt || `Flag of ${country.name?.common}`}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-3 truncate">
          {country.name?.common}
        </h3>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4 text-indigo-500 flex-shrink-0" />
            <span className="text-sm truncate">
              <span className="font-medium">Capital:</span>{" "}
              {Array.isArray(country.capital) && country.capital.length > 0
                ? country.capital[0]
                : country.capital || "N/A"}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Globe className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span className="text-sm truncate">
              <span className="font-medium">Region:</span>{" "}
              {country.region || "N/A"}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-4 h-4 text-purple-500 flex-shrink-0" />
            <span className="text-sm">
              <span className="font-medium">Population:</span>{" "}
              {formatPopulation(country.population)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
