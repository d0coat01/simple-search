import React from "react";

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.getItems();
  }
  getItems() {
    fetch('https://restcountries.eu/rest/v2/all?fields=name')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          items: data
        });
      });
  }
  render() {
    const term = this.props.term || "";
    const items = this.state.items.map((item, id) => {
      const name = typeof item.name === "string" ? item.name : "";
      const match = term.length < 1 || name.toLowerCase().search(term) !== -1;
      if (name.length < 1 || !match) return null;
      return (
        <li key={id}>
          {name}
        </li>
      );
    });
    return (
      <ul className="items">
        {items}
      </ul>
    );
  }
}

export default Items;