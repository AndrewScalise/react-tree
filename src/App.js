import "./App.css";

import React, { useState, useCallback } from "react";
import Tree from "./Tree";

const items = {
  type: "All",
  key: "null",
  children: [
    {
      key: "null-0",
      type: "case",
      field1: "field",
      operator: "==",
      field2: "field2",
      children: []
    },
    {
      type: "all",
      key: "null-1",
      children: [
        {
          key: "null-1-0",
          type: "case",
          field1: "field",
          operator: "==",
          field2: "field2",
          children: []
        },
        {
          key: "null-1-1",
          type: "case",
          field1: "field",
          operator: "==",
          field2: "field2",
          children: []
        },
        {
          key: "null-1-2",
          type: "case",
          field1: "field",
          operator: "==",
          field2: "field2",
          children: []
        },
      ],
    },
    {
      type: "any",
      key: "null-2",
      children: [
        {
          key: "null-2-0",
          type: "case",
          field1: "field",
          operator: "==",
          field2: "field2",
          children: []
        },
        {
          key: "null-2-1",
          type: "case",
          field1: "field",
          operator: "==",
          field2: "field2",
          children: []
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
    setData(updatedData);
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

  const addNode = (name, parentKey) => {
    const newTree = { ...data };
    const findNode = (node) => {
      if (node.key === parentKey) {
        const newKey = `${parentKey}-${node.children.length}`;
        node.children.push({ type: name, key: newKey, children: [] });
      }
      if (node.children.length) {
        node.children.forEach((child) => findNode(child));
      }
    };
    findNode(newTree);
    setData(newTree);
  }

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
      <button style={{ marginLeft: "10px" }} onClick={() => addNode("All", "null")}>Add All</button>
      <button style={{ marginLeft: "10px" }}>Add Any</button>
      <button style={{ marginLeft: "10px" }}>Add Case</button>
      <div></div>
      <Tree items={data} updateData={updateData} setData={setData} />
    </>
  );
};

export default App;
