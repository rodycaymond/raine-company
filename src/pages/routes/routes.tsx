import { About } from "../About";
import { Contact } from "../Contact";
import { Home } from "../Home";
import { Routes, Route } from "react-router";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};
