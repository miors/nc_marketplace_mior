import axios from "axios";
const baseURL = "https://nc-marketplace-sem-2.onrender.com/api";

const getItemsList = () => {
  const url = `${baseURL}/items`;
  return axios
    .get(url)
    .then((res) => {
      return res.data.items;
    })
    .catch((err) => {
      if (err.name === "AxiosError") {
        console.log("An error occured");
      }
    });
};

const getCategories = () => {
  const url = `${baseURL}/categories`;
  return axios
    .get(url)
    .then((res) => {
      return res.data.categories;
    })
    .catch((err) => {
      if (err.name === "AxiosError") {
        console.log("An error occured");
      }
    });
};

const postNewSellItem = (itemName, imgUrl, price, description, category) => {
  const url = `${baseURL}/items`;
  const postBody = {
    item_name: itemName,
    img_url: imgUrl,
    price: price,
    description: description,
    category_name: category,
  };
  return axios
    .post(url, postBody)
    .then((res) => {
      return res.data.item;
    })
    .catch((err) => {
      console.log(err);
      if (err.name === "AxiosError") {
        console.log("An error occured");
      }
    });
};

// POST /api/users/:username/basket

const postItemToUserBasket = (username, item_id) => {
  const url = `${baseURL}/users/:username/basket`;

  const postBody = { item_id };
};

export default { getItemsList, getCategories, postNewSellItem };
