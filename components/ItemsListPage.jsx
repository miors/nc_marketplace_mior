import api from "../api/api";
import { useState, useEffect } from "react";
import Item from "./Item";
import "./ItemsListPage.css";

export default function ItemsListPage() {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    api.getItemsList().then((listOfItems) => {
      setItemsList(listOfItems);
    });
  }, []);

  return (
    <div>
      <h1>List of all items</h1>
      <ul>
        {itemsList.map((item) => {
          return <Item item={item} key={item.item_id} />;
        })}
      </ul>
    </div>
  );
}
