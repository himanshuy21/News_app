import React, { useEffect, useState } from "react";
import { NewsApi } from "../Api/Newsapi";
import "../App.css";
import { Navbar } from "./Navbar/Navbar";
export const Sports = () => {
  const [value, setValue] = useState("sports");
  const [data, setData] = useState([]);
  useEffect(() => {
    NewsApi(value).then((res) => {
      console.log(res.data.articles);
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
              className="card-title"
              role="link"
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
