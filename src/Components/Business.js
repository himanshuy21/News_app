import React, { useEffect, useState } from "react";
import { NewsApi } from "../Api/Newsapi";
import "../App.css";
import { Navbar } from "./Navbar/Navbar";
import { Link } from "react-router-dom";
export const Business = () => {
  const [value, setValue] = useState("Business");
  const [data, setData] = useState([]);
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
            <h5 className="card-title">{item.title}</h5>
            {/* <p className="card-title">
              {item.description}
              <Link to={item.url}>ReadMore</Link>
            </p> */}
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
