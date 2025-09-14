"use client";
import React from "react";

const project = ({ params }) => {
  return (
    <div>
      <h1>project: {params.all}</h1>
      <br></br>
      All Routes
      {params.all.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </div>
  );
};

export default project;
