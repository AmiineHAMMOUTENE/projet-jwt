import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ModulesPage from "./pages/ModulesPage";
import RootLayout from "./Layouts/RootLayout";
import NoPage from "./pages/NoPage";
import AddModulePage from "./pages/AddModulePage";
import ModuleDetailsPage from "./pages/ModuleDetailsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="modules" element={<ModulesPage />} />
        <Route path="add-module" element={<AddModulePage />} /> 
        <Route path="modules/:id" element={<ModuleDetailsPage />} /> 
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default App;
