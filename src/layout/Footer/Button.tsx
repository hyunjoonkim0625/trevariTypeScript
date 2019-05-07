import React from "react";
import "./Button.scss";

interface ButtonProps {
  scrollStepInPx: number;
  delayInMs: number;
}

interface ButtonState {
  // TODO: number 혹은 Timeout이 들어오는데, 어떤 타입으로 설정하는 것이 좋을까?
  intervalId: any;
}

class Button extends React.Component<ButtonProps, ButtonState> {
  state: ButtonState = {
    intervalId: 0
  };

  scrollStep(): void {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop(): void {
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

export default Button;
