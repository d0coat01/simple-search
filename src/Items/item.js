import React from "react";

function Item(props) {
  const key = props.key || null;
  const name = props.name || "";
  return (
    <li key={key}>{name}</li>
  )
}

export default Item;