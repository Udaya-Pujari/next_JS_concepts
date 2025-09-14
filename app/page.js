/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push(page);
  };
  return (
    <section>
      <h1>Home</h1>
      <button
        className="border px-2 py-4"
        onClick={() => {
          navigate("about");
        }}
      >
        Go to Abot page
      </button>
      <br />
      <button
        className="border px-2 py-4"
        onClick={() => {
          navigate("login");
        }}
      >
        Go to login page
      </button>
    </section>
  );
};

export default page;
