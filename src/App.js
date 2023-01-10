import "./App.css";

import React, { useState, useCallback } from "react";
import Tree from "./Tree";

const items = {
  type: "All",
  children: [
    {
      type: "case",
      field1: "field",
      operator: "==",
      field2: "field2",
    },
    {
      type: "all",
      children: [
        {
          type: "case",
          field1: "field",
          operator: "==",
          field2: "field2",
        },
        {
          type: "case",
          field1: "field",
          operator: "==",
          field2: "field2",
        },
        {
          type: "case",
          field1: "field",
          operator: "==",
          field2: "field2",
        },
      ],
    },
    {
      type: "any",
      children: [
        {
          type: "case",
          field1: "field",
          operator: "==",
          field2: "field2",
        },
        {
          type: "case",
          field1: "field",
          operator: "==",
          field2: "field2",
        },
      ],
    },
  ],
};

const App = () => {
  const [data, setData] = useState(items);

  const updateData = (key, value) => {
    let updatedData = { ...data };
    updatedData["children"][key] = value;
    console.log(updatedData);
    // setData(updatedData);
  };

  const toggleAnyAll = useCallback(() => {
    let updateData = { ...data };
    let type = data["type"] === "All" ? "Any" : "All";
    console.log(type);
    console.log(data["type"]);
    updateData["type"] = type;
    setData(updateData);
  }, [data]);

  const clearTree = () => {
    setData({ type: "All", children: [] });
  };

  return (
    <>
      <div>
        {data["type"]}
        <button style={{ marginLeft: "10px" }} onClick={toggleAnyAll}>
          Toggle Any/All
        </button>
        <button style={{ marginLeft: "10px" }} onClick={clearTree}>
          Clear Tree
        </button>
      </div>
      <button style={{ marginLeft: "10px" }}>Add All</button>
      <button style={{ marginLeft: "10px" }}>Add Any</button>
      <button style={{ marginLeft: "10px" }}>Add Case</button>
      <div></div>
      <Tree items={data} updateData={updateData} />
    </>
  );
};

export default App;
