import React from "react";

function Item(props) {
  const id = props.id;
  const name = props.name || "";
  return (
    <li key={id}>{name}</li>
  )
}

export default Item;