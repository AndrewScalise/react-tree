import React from "react";

const Case = ({ item }) => {
  return (
    <div>
        <div>
            {item.type}
        </div>
        <div>
            {item.field1} {item.operator} {item.field2}
        </div>
    </div>
  );
};

export default Case;
