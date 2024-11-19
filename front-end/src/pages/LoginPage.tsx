import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL);
    if (token) {
      navigate("/modules");
    }
  }, [token, navigate]);

  const handleLogin = async () => {
    try {
      // Send login request to your backend API
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login_check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username, // Use 'username' instead of 'email'
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials or server error");
      }

      // Parse the response and get the token
      const data = await response.json();
      const token = data.token; // Assuming your API returns the token as "token"

      // Store the token in localStorage
      localStorage.setItem("authToken", token);

      // Navigate to the modules page
      navigate("/modules");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen-hero bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username:</label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <Button
            onClick={handleLogin}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
