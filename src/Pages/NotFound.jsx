import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center sm:px-6 lg:px-8">
      <div className="max-w-md space-y-6">
        {/* Large 404 text with gradient */}
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-linera-to-r from-blue-600 to-indigo-600 tracking-tight">
          404
        </h1>

        {/* Error message */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Page not found
          </h2>
          <p className="text-6xl text-gray-600">
            404
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
