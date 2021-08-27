import React from "react";
import { Link } from "react-router-dom";
//Link 모듈은 to 속성의 값에 작성된 문자열은 Route의 path 속성의 문자열과 연결된다.
//Link to 를 이용하여 f12창으로 보면 a태그로 보이기 때문에 css를 a태그로 꾸며준다
import "../style/nav.css";

const Nav = () => {
  return (
    <div>
      <header>
        <div className='center'>
          <Link to='/'>
            <h3>Logo</h3>
          </Link>
          <ul>
            <Link to='/'>
              <li>HOME</li>
            </Link>
            <Link to='/about'>
              <li>ABOUT</li>
            </Link>
            <Link to='/movie'>
              <li>MOVIE</li>
            </Link>
            {/* <li>HOME</li>
            <li>ABOUT</li>
            <li>MOVIE</li> */}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Nav;
