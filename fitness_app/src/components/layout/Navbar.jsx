import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logoutUser } = useAuth();

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="font-bold text-xl">FitnessTracker</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/add">Add Workout</Link>
        <Link to="/history">History</Link>
        <Link to="/progress">Progress</Link>
        {user ? (
          <button onClick={logoutUser} className="ml-3 bg-red-500 px-3 py-1 rounded">
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
