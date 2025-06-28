import type { SortButtonProps } from "@/types/CountriesType";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

export const SortButton: React.FC<SortButtonProps> = ({
  field,
  currentSortBy,
  sortOrder,
  onSort,
  children,
}) => {
  const getSortIcon = (): JSX.Element => {
    if (currentSortBy !== field) return <ArrowUpDown className="w-4 h-4" />;
    return sortOrder === "asc" ? (
      <ArrowUp className="w-4 h-4" />
    ) : (
      <ArrowDown className="w-4 h-4" />
    );
  };

  return (
    <button
      onClick={() => onSort(field)}
      className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
    >
      {children} {getSortIcon()}
    </button>
  );
};
