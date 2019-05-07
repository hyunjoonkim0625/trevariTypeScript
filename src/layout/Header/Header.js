import React, { Component } from "react";
import "./Header.scss";
import { withRouter } from "react-router-dom";
import HeaderLinks from "./HeaderLinks";

// fontAwsomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollPos: 60,
      show: true,
      dropDownShow: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // url의 변경(페이지 이동)이 발생하면 열려있던 메뉴탭(모바일 뷰)을 닫습니다
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        dropDownShow: false
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // scroll 위치를 감지하기 위한 핸들러
  handleScroll = () => {
    const { prevScrollPos } = this.state;

    if (window.pageYOffset >= 60) {
      const currentScrollPos = window.pageYOffset;
      const show = prevScrollPos > currentScrollPos;

      this.setState({
        prevScrollPos: currentScrollPos,
        show
      });
    }
  };

  // 메뉴탭 토글 핸들러
  handleDropDownShow = event => {
    this.setState({
      dropDownShow: !this.state.dropDownShow
    });
  };

  render() {
    return (
      <div className={`Header ${!this.state.show ? "hidden" : ""}`}>
        <a className="Header__logo" href="/">
          TREVARI
        </a>
        <div className="Header__menuButton">
          <div onClick={this.handleDropDownShow}>
            <FontAwesomeIcon icon="bars" />
          </div>
        </div>
        <div className="Header__links">
          <HeaderLinks />
        </div>

        <div
          className={`Header__dropMenu ${
            this.state.dropDownShow ? "show" : ""
          }`}
        >
          <HeaderLinks />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
