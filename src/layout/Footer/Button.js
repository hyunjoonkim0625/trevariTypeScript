import React, { Component } from "react";
import "./Button.scss";

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <button
        className="Button"
        onClick={() => {
          this.scrollToTop();
        }}
      >
        자주 묻는 질문 &#38; 공지사항
      </button>
    );
  }
}
