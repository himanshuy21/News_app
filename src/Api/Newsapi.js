import axios from "axios";

const url = "https://newsapi.org/v2/everything";
const key = "6e213ad602f742bd91b043214107e8bb";
export const NewsApi = async (value) => {
  const user = await axios({
    method: "GET",
    url: `${url}?q=${value}&apiKey=${key}`,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  if (user) {
    return user;
  }
};
