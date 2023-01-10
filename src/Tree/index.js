import React, { useCallback } from "react";
import TreeNode from "./Node";

const Tree = ({ items, updateData }) => {
  const createId = useCallback((parentId, index) => `${parentId}-${index}`, []);
  const addAll = (index) => {
    let addAll = { type: "All", children: [] };
    updateData(index, addAll);
  };

  return (
    <>
      <ul>
        {items["children"]?.map((item, index) => (
          <>
            <TreeNode
              key={createId(null, index)}
              parentId={null}
              index={index}
              item={item}
              createId={createId}
            />
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => addAll(index)}
            >
              Add All
            </button>
            <button style={{ marginLeft: "10px" }}>Add Any</button>
            <button style={{ marginLeft: "10px" }}>Add Case</button>
          </>
        ))}
      </ul>
    </>
  );
};

export default Tree;
