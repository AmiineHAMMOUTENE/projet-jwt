import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const handleLogout = () => {
    // Remove the token from local storage and redirect to login page
    localStorage.removeItem("authToken");
    navigate("/"); // Redirect to login page
  };

  return (
    <nav className="bg-blue-500 p-4 h-[72px]">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          My App
        </Link>
        <div>
          {!token ? (
            // If no token, show the login link
            <Link to="/" className="text-white px-4 py-2 rounded hover:bg-blue-700">
              Login
            </Link>
          ) : (
            // If token exists, show the logout button
            <>
              <Link to="/modules" className="text-white px-4 py-2 rounded hover:bg-blue-700">
                Modules
              </Link>
              <Link to="/add-module" className="text-white px-4 py-2 rounded hover:bg-blue-700">
                Add Module
              </Link>
              <button
                onClick={handleLogout}
                className="text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
