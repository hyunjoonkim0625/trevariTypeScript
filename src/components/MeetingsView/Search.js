import React, { Component } from "react";
import "./Search.scss";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <form
        className="Search"
        onSubmit={this.props.handleSearch(this.state.value)}
      >
        <input
          className="Search__input"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="클럽명 검색"
          type="search"
        />
        <input className="Search__submit" type="submit" value="검색" />
      </form>
    );
  }
}
