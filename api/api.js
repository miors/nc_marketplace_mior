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
      console.log(res.data.categories);
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
  const postBody = { itemName, imgUrl, price, description, category };
  return axios
    .get(url, postBody)
    .then((res) => {
      console.log(res.data.items);
      return res.data.items;
    })
    .catch((err) => {
      if (err.name === "AxiosError") {
        console.log("An error occured");
      }
    });
};

export default { getItemsList, getCategories, postNewSellItem };
