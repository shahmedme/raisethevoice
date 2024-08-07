import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white shadow fixed w-full z-[999]">
        <div className="max-w-7xl mx-auto">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-xl font-bold text-gray-700 mb-0">
                  RaiseTheVoice
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex ml-2">
                  <div className="relative mt-1">
                    <form onSubmit={() => {}}>
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="table-search"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 py-2"
                        placeholder="Search"
                        value={""}
                        onChange={() => {}}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="ml-3 relative">
                <div className="flex items-center justify-between">
                  <Link
                    to="/login"
                    className="bg-gray-900 !hover:text-white !text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div style={{ height: 64 }} />
    </div>
  );
}
