import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ItemsListPage from "../components/ItemsListPage";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import CategoriesPage from "../components/CategoriesPage";
import SellItemPage from "../components/SellItemPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import api from "../api/api";

function App() {
  const [categoriesInApp, setCategoriesInApp] = useState([]);

  useEffect(() => {
    api.getCategories().then((listOfCategoriesObjects) => {
      setCategoriesInApp(listOfCategoriesObjects);
    });
  }, []);

  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/sell-item"
          element={<SellItemPage categoriesInApp={categoriesInApp} />}
        />
        <Route
          path="/list-categories"
          element={<CategoriesPage categoriesInApp={categoriesInApp} />}
        />
        <Route path="/list-items" element={<ItemsListPage />} />
      </Routes>
    </>
  );
}

export default App;
