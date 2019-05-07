import React from "react";
import "./HeaderLinks.scss";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

// 링크 메뉴
const headerLinkMenu = [
  "트레바리 알아보기",
  "멤버십 신청",
  "독서 모임",
  "이벤트",
  "채용공고",
  "로그인"
];

interface HeaderLinksProps extends RouteComponentProps<any> {}

interface HeaderLinksState {
  currentMenu:
    | "트레바리 알아보기"
    | "멤버십 신청"
    | "독서 모임"
    | "이벤트"
    | "채용공고"
    | "로그인"
    | "";
}

class HeaderLinks extends React.Component<HeaderLinksProps, HeaderLinksState> {
  state: HeaderLinksState = {
    currentMenu: "독서 모임"
  };

  // 헤더 링크를 클릭하자마자 상태 변화가 적용
  public shouldComponentUpdate(nextProps: any) {
    return this.props.location.pathname !== nextProps.location.pathname;
  }

  // 다른 페이지로 이동하면 currentMenu 상태가 초기화
  // TOFIX: HeaderLinks는 항상 노출되어 있어 페이지가 새로 그려지지 않아서 사용한 방법인데, 버튼을 두 번 연속 누르고 다른 페이지로 넘어갈 시에 상태가 ""로 초기화되지 않는다
  public componentDidUpdate(prevProps: any) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        currentMenu: ""
      });
    }
  }

  // QUESTION: 위에서 HeaderLinksState의 타입을 그냥 currentMenu: string으로 주는 것이 더 나을까?
  handleChangeMenu = (menu: any): void => {
    this.setState({
      currentMenu: menu
    });
  };

  render() {
    const { currentMenu } = this.state;
    console.log(currentMenu);
    return (
      <div className="HeaderLinks">
        <ul className="HeaderLinks__linkList">
          {headerLinkMenu.map(menu =>
            menu === "독서 모임" ? (
              <Link
                to="/meetings"
                key={menu}
                onClick={() => this.handleChangeMenu(menu)}
              >
                <li>
                  <span className={currentMenu === menu ? "selected" : ""}>
                    {menu}
                  </span>
                </li>
              </Link>
            ) : (
              <li key={menu}>
                <span className="HeaderLinks__disabled">{menu}</span>
              </li>
            )
          )}
        </ul>
      </div>
    );
  }
}

export default withRouter(HeaderLinks);
