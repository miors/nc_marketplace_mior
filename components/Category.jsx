import "./Category.css";

export default function Category({ category }) {
  return (
    <li className="categories" key={category.category_name}>
      {category.category_name}
    </li>
  );
}
