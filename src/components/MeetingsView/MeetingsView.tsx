import React from "react";
import "./MeetingsView.scss";
import Search from "./Search";
import { IClub } from "../../common/types";

interface MeetingsViewProps {
  // FIXED: 데이터 타입 정의할 때는 가능한 any을 피하는 게 좋아요! ㅋㅋㅋㅋ MeetingContainers 컴포넌트에 정의하셨던 IClub 인터페이스도 전역으로 별도의 파일을 빼서 재사용하시면 좋아요
  clubList: IClub[];
}

interface MeetingsViewState {
  // FIXED: 어떤 타입의 리스트인지도 명시해주면 좋습니다.
  // 인터페이스의 상태는 당연히... type에서 가져와서 설정을 해야하지!
  // currentlyShownList: IClub[];
  currentlyShownList: IClub[];
  value?: string;
  loading: boolean;
  items: number;
}

class MeetingsView extends React.Component<
  MeetingsViewProps,
  MeetingsViewState
> {
  state = {
    currentlyShownList: [] as IClub[],
    value: "",
    loading: true,
    items: 5
  };

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

  // 검색 필터링을 위한 핸들러
  handleSearch = (value: string) => {
    // FIXED: 이런 콜백 함수의 경우 react에 타입이 이미 정의된 경우가 많아요. ex) React.FormEvent<HTMLInputElement>
    return (event: React.FormEvent<HTMLFormElement>): void => {
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

  // 스크롤이 화면 맨 아래에 도착했는지 확인하는 핸들러
  onScroll = (): void => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 250
    ) {
      this.setState(prevState => ({
        items: prevState.items + 6
      }));
    }
  };

  render() {
    const { currentlyShownList, loading, items } = this.state;

    const hasData: boolean = currentlyShownList.length > 0 ? true : false;

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
        {hasData ? (
          // 이미지가 로드가 된 후에 콘텐츠를 화면에 렌더하기 위핸 클래스 추가
          <div
            className={`MeetingsView__clubList${loading ? "--loading" : ""}`}
          >
            {/* FIXED: currentlyShownList가 없는 경우가 없을 것 같아 해당 체킹은 생략해도 괜찮을 것 같아요. */}
            {/* 초기 상태값에 []를 할당하기 때문에 */}
            {currentlyShownList
              .slice(0, items)
              // FIXED: 여기도 any 자제! -> 맞는 방법일까?

              .map((item, index: number) => {
                return (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <div className="MeetingsView__clubList__content" key={index}>
                    <div className="MeetingsView__clubList__content__image">
                      <img
                        src={item.imgSrc}
                        alt={item.bookTitle}
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

export default MeetingsView;
