import React, { useEffect, useState } from "react";
import { NewsApi } from "../Api/Newsapi";
import "../App.css";
export const Home = () => {
  const [value, setValue] = useState("all");
  const [data, setData] = useState([]);
  useEffect(() => {
    NewsApi(value).then((res) => {
      console.log(res.data.articles);
      setData(res.data.articles);
    });
  }, []);
  let listItems = data.map((item) => (
    <div className="container ">
      <div className="card " style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={item.urlToImage}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <a href={item.url} className="btn btn-danger">
            Read More
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 ">
      {listItems}
    </div>
  );
};
