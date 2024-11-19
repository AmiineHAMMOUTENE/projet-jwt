import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const ModulesPage = () => {
  const [modules, setModules] = useState<{ id: number; title: string }[]>([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      navigate("/modules");
    } else {
      fetch(`${import.meta.env.VITE_API_URL}/modules`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem("authToken")}` },
      })
        .then((response) => response.json())
        .then((data) => setModules(data))
        .catch((error) => console.error("Error fetching modules:", error));
    }

  }, []);

  if (!token) {
    return <div className="flex flex-col gap-10 items-center justify-center min-h-screen-hero bg-gray-100">
      <h1 className="text-xl text-red-600">you need to be logged</h1>
      <Link to="/" className="bg-[#3b82f6] text-white px-4 py-2 rounded hover:bg-blue-700">
        Login
      </Link>
    </div>
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Modules</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules && modules.map((module, index) => (
          <li key={module.id}>
            <Card key={index} className="p-4 bg-white shadow rounded-lg hover:shadow-md">

              <Link
                to={`/modules/${module.id}`}
                className="text-blue-500 hover:underline"
              >
                <h2 className="text-lg font-semibold">{module.title}</h2>
              </Link>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModulesPage;
