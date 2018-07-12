import React from "react";

function Item(props) {
  const id = props.key || null;
  const name = props.name || "";
  return (
    <li key={id}>{name}</li>
  )
}

export default Item;