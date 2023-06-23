import Link from "next/link";
import React from "react";

const Users = () => {
  return (
    <div>
      <Link href="/users/1">user 1</Link>
      <Link href="/users/2">user 2</Link>
      <Link href="/users/3">user 3</Link>
      <Link href="/users/4">user 4</Link>
    </div>
  );
};

export default Users;
