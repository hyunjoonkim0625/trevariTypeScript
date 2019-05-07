import React, { Component } from "react";
import "./HeaderLinks.scss";
import { Link, withRouter } from "react-router-dom";

// 링크 메뉴
const headerLinkMenu = [
  "트레바리 알아보기",
  "멤버십 신청",
  "독서 모임",
  "이벤트",
  "채용공고",
  "로그인"
];

class HeaderLinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 독서 모임 페이지 밖에 존재하지 않기 때문에 설정한 초기 값
      currentMenu: "독서 모임"
    };
  }

  // 헤더 링크를 클릭하자마자 상태 변화가 적용
  shouldComponentUpdate(nextProps) {
    return this.props.location.pathname !== nextProps.location.pathname;
  }

  // 다른 페이지로 이동하면 currentMenu 상태가 초기화
  // TOFIX: HeaderLinks는 항상 노출되어 있어 페이지가 새로 그려지지 않아서 사용한 방법인데, 버튼을 두 번 연속 누르고 다른 페이지로 넘어갈 시에 상태가 ""로 초기화되지 않는다
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        currentMenu: ""
      });
    }
  }

  handleChangeMenu = menu => {
    this.setState({
      currentMenu: menu
    });
  };

  render() {
    const { currentMenu } = this.state;

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
