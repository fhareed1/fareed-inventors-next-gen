import React, { useState, useEffect, useMemo } from "react";
import { CountriesGrid } from "@/components/country/CountriesGrid";
import { Pagination } from "@/components/ui/pagination";
import { Header } from "@/components/layout/Header";
import { ErrorDisplay } from "@/components/ui/errorDisplay";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import type { Country, SortField, SortOrder } from "@/types/CountriesType";

const CountriesExplorer: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortField>("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(12);

  // Fetch countries data
  useEffect(() => {
    const fetchCountries = async (): Promise<void> => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population"
        );
        if (!response.ok) throw new Error("Failed to fetch countries");
        const data: Country[] = await response.json();
        setCountries(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Get unique regions for filter dropdown
  const regions = useMemo(() => {
    const uniqueRegions = [
      ...new Set(countries.map((country) => country.region).filter(Boolean)),
    ];
    return uniqueRegions.sort();
  }, [countries]);

  const filteredAndSortedCountries = useMemo(() => {
    const filtered = countries.filter((country) => {
      const commonName = country.name?.common || "";
      const officialName = country.name?.official || "";
      const matchesSearch =
        commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        officialName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion =
        !selectedRegion || country.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });

    if (sortBy === "population") {
      filtered.sort((a, b) => {
        const popA = a.population || 0;
        const popB = b.population || 0;
        return sortOrder === "asc" ? popA - popB : popB - popA;
      });
    } else if (sortBy === "name") {
      filtered.sort((a, b) => {
        const nameA = a.name?.common || "";
        const nameB = b.name?.common || "";
        return sortOrder === "asc"
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      });
    }

    return filtered;
  }, [countries, searchTerm, selectedRegion, sortBy, sortOrder]);

  const totalPages = Math.ceil(
    filteredAndSortedCountries.length / itemsPerPage
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCountries = filteredAndSortedCountries.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedRegion, sortBy, sortOrder]);

  const handleSort = (field: SortField): void => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay error={error} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header
        searchTerm={searchTerm}
        selectedRegion={selectedRegion}
        regions={regions}
        sortBy={sortBy}
        sortOrder={sortOrder}
        resultCount={paginatedCountries.length}
        totalCount={filteredAndSortedCountries.length}
        onSearchChange={setSearchTerm}
        onRegionChange={setSelectedRegion}
        onSort={handleSort}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <CountriesGrid countries={paginatedCountries} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default CountriesExplorer;
