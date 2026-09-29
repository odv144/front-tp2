import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Bitacora from "./pages/Bitacora";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil/:id" element={<Profile />} />
        <Route path="/bitacora" element={<Bitacora />} />
      </Routes>
    </BrowserRouter>
  );
}
