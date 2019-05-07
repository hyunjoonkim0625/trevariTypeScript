import React, { Component } from "react";
import "./FaqView.scss";
import Collapse from "./Collapse";

export default class FaqView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: "faq",
      displayCategory: "북클럽"
    };
  }

  handleChangeCategory = category => {
    this.setState({
      displayCategory: category
    });
  };

  handleFaqClick = () => {
    this.setState({
      currentTab: "faq"
    });
  };

  handleNoticeClick = () => {
    this.setState({
      currentTab: "notice"
    });
  };

  render() {
    const { faqCategories, faqContent } = this.props;
    const { displayCategory, currentTab } = this.state;
    return (
      <div className="FaqView">
        <div className="FaqView__container">
          {/* 카테고리와 공지사항 탭 */}
          <div className="FaqView__container__tabs">
            <button
              className={currentTab === "faq" ? "clicked" : ""}
              onClick={this.handleFaqClick}
            >
              FAQ
            </button>
            <button
              className={currentTab === "notice" ? "clicked" : ""}
              onClick={this.handleNoticeClick}
            >
              공지사항
            </button>
          </div>

          {/* 카테고리 탭 텍스트 */}
          <div className="FaqView__container__info">
            <p>
              더 궁금하신 사항은{" "}
              <a href="mailto:contact@trevari.co.kr">contact@trevari.co.kr</a>로
              문의주세요 :)
            </p>
            <p>
              성함/휴대전화번호/클럽명을 함께 알려주시면 더 빠르게 확인
              가능합니다!
            </p>
            <p>- 회신가능요일: 월~금</p>
          </div>

          {/* 카테고리 메뉴  */}
          <div className="FaqView__container__categoryMenu">
            {faqCategories.map(category => (
              <button
                className={displayCategory === category ? "selected" : ""}
                key={category}
                onClick={() => this.handleChangeCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 각 카테고리 내용 */}
          <div className="FaqView__container__categoryContent">
            {faqContent &&
              faqContent
                .filter(item => item.category === displayCategory)
                .map((item, index) => {
                  return (
                    <Collapse
                      category={displayCategory}
                      title={item.title}
                      initialShow={false}
                      key={index}
                    >
                      <div>{item.text}</div>
                    </Collapse>
                  );
                })}
          </div>
        </div>
      </div>
    );
  }
}
