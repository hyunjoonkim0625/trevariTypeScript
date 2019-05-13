import React from "react";
import "./Search.scss";

interface SearchProps {
  handleSearch: (
    value: string
  ) => (event: React.FormEvent<HTMLFormElement>) => void;
}

interface SearchState {
  value?: string;
}

class Search extends React.Component<SearchProps, SearchState> {
  state = {
    value: ""
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      value: event.currentTarget.value
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

export default Search;
