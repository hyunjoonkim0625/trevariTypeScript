import React, { Component } from "react";
import "./MeetingsView.scss";
import Search from "./Search";

export default class MeetingsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlyShownList: [],
      value: "",
      loading: true,
      // 처음 화면에 보여질 독서 모임 수
      items: 5
    };
  }

  // 컴포넌트가 렌더되었을 때 보여지는 아이템의 갯수를 제한
  componentDidMount() {
    const { clubList } = this.props;

    this.setState({
      currentlyShownList: clubList
    });

    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  // 스크롤이 화면 맨 아래에 도착했는지 확인하는 핸들러
  onScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 250
    ) {
      this.setState(prevState => ({
        items: prevState.items + 6
      }));
    }
  };

  // 검색 필터링을 위한 핸들러
  handleSearch = value => {
    return event => {
      event.preventDefault();

      const defaultClubList = this.props.clubList;

      const lowerCasedValue = value.toLowerCase();

      const searchedList = defaultClubList.filter(item =>
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

  render() {
    const { currentlyShownList, loading, items } = this.state;

    return (
      <div className="MeetingsView">
        <div className="MeetingsView__header">
          <p className="MeetingsView__header__text">
            내 일정에 맞는 놀러가기 클럽을 찾으신다면?
          </p>
          <input
            className="MeetingsView__header__button"
            type="button"
            value="독서모임 캘린더 바로가기"
          />
          <Search handleSearch={this.handleSearch} />
        </div>

        {/* 검색 결과 유무에 따른 조건부 렌더링 */}
        {currentlyShownList.length > 0 ? (
          // 이미지가 로드가 된 후에 콘텐츠를 화면에 렌더하기 위핸 클래스 추가
          <div
            className={`MeetingsView__clubList${loading ? "--loading" : ""}`}
          >
            {currentlyShownList &&
              currentlyShownList.slice(0, items).map((item, index) => {
                return (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <div className="MeetingsView__clubList__content" key={index}>
                    <div className="MeetingsView__clubList__content__image">
                      <img
                        src={item.imgSrc}
                        alt="yoda"
                        onLoad={() =>
                          this.setState({
                            loading: false
                          })
                        }
                      />
                      {item.clubRep ? (
                        <p className="MeetingsView__clubList__content__image__clubRep">
                          클럽장 {item.clubRep}님
                        </p>
                      ) : null}
                      {item.trevariDesigned ? (
                        <p className="MeetingsView__clubList__content__image__trevari">
                          트레바리가 디자인한 클럽
                        </p>
                      ) : null}

                      <div className="MeetingsView__clubList__content__image__clubInfo">
                        <p>{item.clubName}</p>
                        <p>{item.clubDescription}</p>
                      </div>
                    </div>

                    <p className="MeetingsView__clubList__content__bookTitle">
                      {item.bookTitle}
                    </p>
                    <p className="MeetingsView__clubList__content__location">
                      {item.location}
                    </p>
                    <p className="MeetingsView__clubList__content__time">
                      {item.time}
                    </p>
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="MeetingsView__notFound">
            <div>검색 결과가 없습니다.</div>
          </div>
        )}
      </div>
    );
  }
}
