import React, {useCallback} from "react";
import Case from "./Case";

const TreeNode = ({ parentId, index, item }) => {
  const createId = useCallback((parentId, index) => {
    return `${parentId}-${index}`;
  }, []);
  const id = createId(parentId, index);
  console.log(id);

  // render the tree node using the id
  return (
    <li key={id}>
      {item["type"] === "case" ? <Case item={item}/> : item["type"]}
      {item["children"] && (
        <ul>
          {item["children"].map((child, index) => (
            <TreeNode
              key={createId(id, index)}
              parentId={id}
              index={index}
              item={child}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default TreeNode;
