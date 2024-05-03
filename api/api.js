import axios from "axios";
const baseURL = "https://nc-marketplace-sem-2.onrender.com";

const getItemsList = () => {
  const url = `${baseURL}/api/items`;
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
  const url = `${baseURL}/api/categories`;
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
  const url = `${baseURL}/api/items`;
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

export default { getItemsList, getCategories, postNewSellItem };
