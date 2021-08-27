import React, { useState, useEffect } from "react";
import "../style/movie.css";
const Movie = () => {
  useEffect(() => {
    fetchItems();
  }, []); //모든 값들이 오기전까지 기다렸다가 모든 값을 가져오면 실행됨

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    //일반적으로 fetch를 사용할 때는 두 단계를 거친다.
    //첫 번째 단계는 요청 주소에서 객체 테이터를 받아오는 단계이고(data)
    //두 번째 단계는 돌아온 객체 데이터를 json() 객체로 변환하는 단계이다(dataobj)
    //이 두 단계를 동시에 모두 진행시켜주는 모듈이 axios이다(설치과정필요)
    const data = await fetch("https://yts.mx/api/v2/list_movies.json?limit=5");
    //console.log(data); //reponse를 가지고 뭘 할수 있는지만 나옴
    const dataObj = await data.json(); //원래 뿌려지는 json파일로 가져오라고(파싱) 하는것
    //console.log(dataObj);
    const movies = dataObj.data.movies;
    //console.log(movies);

    //받아온 결과를 반복문을 통해 태그 작성 - map으로 하나씩 분리함(movie에 저장)
    const movieContents = movies.map((movie) => (
      <div key={movie.id}>
        <h2>{movie.title}</h2>
        <img src={movie.medium_cover_image} alt='' />
      </div>
    )); //태그가 들어가야해서 함수에 중괄호 대신 ()로 감싸줌,movies를 movie로 바꿔줬음

    setItems(movieContents);
  };
  //함수를 만들고 async로 요청을 먼저 보냄 fetch 앞에 await가 붙으면 다른데이터가 올때까지 실행시키지 말고 기다리라고 한다 , 중요한건 함수를 언제 실행시킬건지!
  return (
    <div className='section movie'>
      <div className='center'>
        <h2>{items}</h2>
      </div>
    </div>
  );
};

export default Movie;
