import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddModulePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Get the token from local storage
    const token = localStorage.getItem("authToken");

    if (!token) {
      // Redirect to login if there's no token
      navigate("/");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/modules`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create module");
      }

      const data = await response.json();
      console.log("Module created:", data);
      // Optionally redirect to another page, e.g., modules list
      navigate("/modules");
    } catch (error) {
      console.error("Error creating module:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen-hero bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center mb-6">Add Module</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Add Module
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddModulePage;
