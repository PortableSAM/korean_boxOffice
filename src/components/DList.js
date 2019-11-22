import React from "react";

export default function Dlilst({ title, Open, rank, people, point }) {
  return (
    <div className="movie">
      <div className="data">
        <h3>순 위 : {rank}</h3>
        <h3>영화제목 : {title}</h3>
        <h3>개봉일자 : {Open}</h3>
        <h4>영화점수 : {point}</h4>
        <h4>누적관객 : {people}명</h4>
      </div>
    </div>
  );
}

/*
<ul>
        <li>
          <h3>순 위 : {rank}</h3>
        </li>
        <li>
          <h3>영화제목 : {title}</h3>
        </li>
        <li>
          <h3>개봉일자 : {Open}</h3>
        </li>
        <li>
          <h4>영화점수 : {point}</h4>
        </li>
        <li>
          <h4>누적관객 : {people}명</h4>
        </li>
      </ul>

*/
