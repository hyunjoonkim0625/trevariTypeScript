import React from "react";
import "./FooterLinks.scss";
import { Link } from "react-router-dom";

const FooterLinks: React.FC = () => {
  return (
    <div className="FooterLinks">
      {/* 사용하지 않기 때문에 disabled 처리 */}
      <Link className="FooterLinks__disabled" to="#">
        <p>블로그</p>
      </Link>
      <Link className="FooterLinks__disabled" to="#">
        <p>채용공고</p>
      </Link>
      <Link className="FooterLinks__disabled" to="#">
        <p>이용약관</p>
      </Link>
      <Link className="FooterLinks__disabled" to="#">
        <p>개인정보처리방침</p>
      </Link>
    </div>
  );
};

export default FooterLinks;
