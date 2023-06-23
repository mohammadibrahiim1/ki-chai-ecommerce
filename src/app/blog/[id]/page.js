import Link from "next/link";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1>Id : {params.id}</h1>
      <Link href="/about">about</Link>
      <Link href="/blog/123">blog</Link>
    </div>
  );
};

export default page;
