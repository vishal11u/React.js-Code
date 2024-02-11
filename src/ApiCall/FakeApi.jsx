import React, { useEffect, useState } from "react";

function FakeApi() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    FakeApi();
  }, []);

  const FakeApi = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setItem(data);
  };

  return (
    <div>
      {item.map((list) => (
        <div key={list.id}>
          <p>{list.id}</p>
          <h1>{list.title}</h1>
          <p>{list.price}</p>
        </div>
      ))}
    </div>
  );
}

export default FakeApi;
