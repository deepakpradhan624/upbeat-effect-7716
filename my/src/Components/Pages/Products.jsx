import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Products.css";

const Products = () => {
  const [data, setData] = useState([]);

  async function getData() {
    axios
      .get(
        "https://json-server-2000.onrender.com/products"
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }

  useEffect(() => {
    getData();
    // console.log("data_fetched", data);
  }, []);

  return (
    <div>
      <div className="productContainer">
        {data.map((e) => (
          <div key={e.id}>
            <div className="card_sub_container">
              <img src={e.img} alt="err" />
              <h4>{e.name}</h4>
              <div>
                <p>{`$ ${e.price}`}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;