import React from "react";
import Items from "../Items/items";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ term: event.target.value.toLowerCase() });
  }
  render() {
    const term = this.state.term;
    return (
      <div className="search">
        <form>
          <input className="search__input" type="text" onChange={this.handleChange} name="search__input" placeholder="Item Search..." />
        </form>
        <Items term={term} />
      </div>
    );
  }
}

export default Search;
