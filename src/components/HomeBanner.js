import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";

export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}>
      <div className="content">
        <div className="wrapper">
          <div className="name">Nikhil Verma</div>
          <div className="staticTitle">Software</div>
          <ul className="dynamicTitle">
            <li>
              <span>Developer</span>
            </li>
          </ul>
          <a
            className="btn"
            href="https://drive.google.com/file/d/1TGIsEgpzSykLb6LMhSj3M3BGQEfPPfSL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </div>
      </div>
      <div className="mask">
        <img className="bg" src={cartoon} alt="boy-with-laptop" />
      </div>
    </div>
  );
}
