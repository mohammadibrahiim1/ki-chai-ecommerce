import React from "react";

const Shop = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <h1>{data.full_name}</h1>
    </div>
  );
};

export default Shop;
