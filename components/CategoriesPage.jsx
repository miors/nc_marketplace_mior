import api from "../api/api";
import { useState, useEffect } from "react";
import Category from "./Category";

export default function CategoriesPage({ categoriesInApp }) {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   api.getCategories().then((listOfCategoriesObjects) => {
  //     setCategories(listOfCategoriesObjects);
  //     setCategoriesInApp(listOfCategoriesObjects);
  //   });
  // }, []);

  return (
    <div>
      <h1>List of categories</h1>
      <ul>
        {categoriesInApp.map((category) => {
          return <Category category={category} key={category.category_name} />;
        })}
      </ul>
    </div>
  );
}
