import React, { useState, useEffect } from "react";
import Loader from "../assets/loading.gif";
import "../style/Detail.css";

const Detail = ({ match }) => {
  //console.log(match);
  const movie_id = match.params.id;
  //console.log(movie_id);
  useEffect(() => {
    fetchItem();
  }, []);
  const [item, setItem] = useState({}); //한개의 객체만 가져올것이기 때문에 중괄호 하나!
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState("");
  const fetchItem = async () => {
    const details = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movie_id}`); //경로를 찍어줄거임 match로 찾아낸 id번호를 변수처리

    const detailObj = await details.json();
    //console.log(details); //상태변화시켜서 콘솔에 찍어주는 것이기 때문에 fechItem을 실행시켜줘야함(상단에 useState useEffect라는 훅을 이용함)
    const detailElm = detailObj.data.movie;
    console.log(detailElm);
    setItem(detailElm);
    //장르 반복문 처리
    const getGenres = detailElm.genres.map((gen) => <li>{gen}</li>);
    setGenres(getGenres);
    setLoading(false);
  };

  return (
    <div className='section detail'>
      {loading ? (
        <div className='loader'>
          <img src={Loader} className='loading_img' alt='' />
        </div>
      ) : (
        <div className='center'>
          <h2 className='title'>{item.title}</h2>
          <img src={item.medium_cover_image} className='movie_img' alt='' />
          <ul className='genres'>Genre : {genres}</ul>
          <p className='desc'>{item.description_intro}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
