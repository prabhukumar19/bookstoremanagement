import React, { useEffect, useState } from "react";
import axios from "axios";
const Home = (props) => {
  const url = "";
  const [data, setData] = useState([]);4
  const [name, setName]=useState("Prabhu");
  const getData = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    console.log(res.data);
    setData(res.data.products);
  };

  useEffect(() => {
    getData(url);
  }, []);

  return (
    // <div className="absolute">
    //   <h2>1. Browse</h2>
    //   <img src={abc} alt={"Image"} className="" height={100} width={200} />
    //   <p>
    //     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
    //     veritatis amet dolorem deleniti voluptatem itaque odit saepe laborum,
    //     nisi aliquid.
    //   </p>
    // </div>

    <>
    <h1>Name :- {props.name}</h1>
      <table>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, i) => {
            return (
              <tr>
                <td>{product.id}</td>
                <td>{product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
