import React from "react"; //단축기 imr
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //모듈을 사용하는건데 그중에 as ...를 불러오면 됨
//Router 어떤 컴포넌트를 우리가 볼때 링크처럼 움직이게 할때 전체를 감싸주는 아이
//- 연결되는 컴포넌트 전체를 감싸준다.
//Route 컴포넌트 각각에 연결을 해줘야한다. path를 이용하여 경로지정 exact를 홈지정
//Route는 연결되는 컴포넌트 각각에 속성을 지정하여 연결경로를 지정한다.
import About from "./components/About";
import Movie from "./components/Movie";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Detail from "./components/Detail";

import "./style/App.css"; //style css 작성법
function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Route path='/' exact component={Home} />
        {/* '/' 를 기준으로 나타나는 페이지를 모두 표시한다. */}
        {/* 즉 '/About'에도 '/'가 있기 때문에 Home과 함께 인식한다 */}
        {/* exact 속성을 사용하면 '/'를 고유하게 인식하여 정확하게 일치하는 경로만 표시한다 */}
        <Route path='/about' component={About} />
        <Route path='/movie' exact component={Movie} />
        <Route path='/movie/:id' component={Detail} />
        {/* <Home />
        <About />
        <Movie /> */}
      </div>
    </Router>
  );
}

export default App;
