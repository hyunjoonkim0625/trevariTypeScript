import React from "react";
import "./Search.scss";

interface SearchProps {
  clubList: any;
}

interface SearchState {
  value: string;
  currentlyShownList: any;
}

class Search extends React.Component<SearchProps, SearchState> {
  state: SearchState = {
    value: "",
    currentlyShownList: this.props.clubList
  };

  // 검색 필터링을 위한 핸들러
  handleSearch = (value: string) => {
    return (event: any) => {
      event.preventDefault();

      const defaultClubList = this.props.clubList;

      const lowerCasedValue = value.toLowerCase();

      const searchedList = defaultClubList.filter((item: any) =>
        item.clubName.toLowerCase().includes(lowerCasedValue)
      );

      const trimmedValue = value.trim();

      // 검색창에 아무것도 입력이 안되었을 시에는 초기 목록을 불러온다
      if (trimmedValue === "") {
        this.setState({
          currentlyShownList: defaultClubList
        });
      } else {
        this.setState({
          currentlyShownList: searchedList
        });
      }
    };
  };

  handleChange = (event: any) => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <form className="Search" onSubmit={this.handleSearch(this.state.value)}>
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
