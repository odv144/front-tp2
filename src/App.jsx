import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Bitacora from "./pages/Bitacora";
import Recursos from "./pages/Recursos";
import ApiPublica from "./pages/ApiPublica";
import Arbol from "./pages/Arbol";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="perfil/:id" element={<Profile />} />
          <Route path="bitacora" element={<Bitacora />} />
          <Route path="recursos" element={<Recursos />} />
          <Route path="api-publica" element={<ApiPublica />} />
          <Route path="arbol" element={<Arbol />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
