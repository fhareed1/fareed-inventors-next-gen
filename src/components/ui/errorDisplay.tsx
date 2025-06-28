import type { ErrorDisplayProps } from "@/types/CountriesType";

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => (
  <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
    <div className="text-center p-8 bg-white rounded-lg shadow-lg">
      <div className="text-red-500 text-6xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
      <p className="text-gray-600">{error}</p>
    </div>
  </div>
);