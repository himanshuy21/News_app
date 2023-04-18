import React, { useEffect, useState } from "react";
import { NewsApi } from "../Api/Newsapi";
import "../App.css";
import { Navbar } from "./Navbar/Navbar";
import { useLocation } from "react-router-dom";
export const Home = () => {
  const [value, setValue] = useState("entertainment");
  const [data, setData] = useState([]);
  useEffect(() => {
    NewsApi(value).then((res) => {
      // console.log(res.data.articles);
      console.log(res.data);
      setData(res.data.articles);
    });
  }, []);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  let listItems = data.map((item) => (
    <div className="container ">
      <div className="card ">
        <div className="card-body">
          <div className="card-subBody">
            <h5
              role="link"
              className="card-title"
              onClick={() => openInNewTab(item.url)}
            >
              {item.title}
            </h5>
          </div>
          <img
            className="card-img-top"
            src={item.urlToImage}
            alt="Card image cap"
          />
        </div>
      </div>
    </div>
  ));
  return (
    <div className="centerContent">
      <Navbar />
      <div>{listItems}</div>
    </div>
  );
};
