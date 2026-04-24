import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Page404 from "./pages/NotFound";
import ProjectComponent from "./pages/Projects/index";
import { DictionaryProvider } from "./utils/context/DictionaryContext";

const AppRoutes = () => {
  return (
    <DictionaryProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectComponent />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </DictionaryProvider>
  );
};

export default AppRoutes;
