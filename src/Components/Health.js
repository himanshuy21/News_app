import React, { useEffect, useState } from "react";
import { NewsApi } from "../Api/Newsapi";
import "../App.css";
import { Navbar } from "./Navbar/Navbar";
export const Health = () => {
  const [value, setValue] = useState("health");
  const [data, setData] = useState([]);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  useEffect(() => {
    NewsApi(value).then((res) => {
      console.log(res.data.articles);
      setData(res.data.articles);
    });
  }, []);
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
            {/* <p className="card-title">{item.description}</p> */}
          </div>
          {/* <a href={item.url} className="btn btn-danger">
            Read More
          </a> */}
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
