import { useState, useEffect } from "react";
import api from "../api/api";
import "./SellItemPage.css";

export default function SellItemPage({ categoriesInApp }) {
  const [itemName, setItemName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Please select a category:");
  const [item, setItem] = useState({});

  useEffect(() => {}, []);

  function handleSubmit(event) {
    event.preventDefault();
    api
      .postNewSellItem(itemName, imgUrl, price, description, category)
      .then((item) => {
        setItem(item);
        setItemName("");
        setImgUrl("");
        setPrice("");
        setDescription("");
        setCategory("Please select a category:");
      });
  }

  return (
    <div>
      <h1>Sell an item</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item name:</label>
        <br />
        <input
          type="text"
          required
          id="item_name"
          name="item_name"
          value={itemName}
          onChange={(event) => {
            setItemName(event.target.value);
          }}
        />
        <br />
        <label htmlFor="img_url">Image URL:</label>
        <br />
        <input
          type="text"
          required
          id="img_url"
          name="img_url"
          value={imgUrl}
          onChange={(event) => {
            setImgUrl(event.target.value);
          }}
        />
        <br />
        <label htmlFor="price">Price:</label>
        <br />
        <input
          type="number"
          required
          id="price"
          name="price"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <br />
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <br />
        <label htmlFor="category_name">Category name:</label>
        <br />
        <select
          key="category-select-box"
          name="category_name"
          id="category_name"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        >
          <option key="category-option">Please select a category:</option>
          {categoriesInApp.map((category, index) => {
            return (
              <option key={category.category_name}>
                {category.category_name}
              </option>
            );
          })}
        </select>
        <br />
        <button className="sell-button">Sell item</button>
      </form>

      {item.hasOwnProperty("item_id") ? (
        <div className="forSaleMessage">
          Success! You have placed the item for sale
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
