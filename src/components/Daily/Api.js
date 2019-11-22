import React from "react";
import Axios from "axios";
import moment from "moment";
import Key from "./Key";
import DailyList from "../DList";

import "./Api.css";

const yesterDay = moment()
  .subtract(1, "d")
  .format("YYYYMMDD");
console.log(yesterDay);

const Daily_API =
  "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/";

export default class Daily extends React.Component {
  state = {
    daily: "",
    list: [],
    isLoading: true
  };

  getDaily = async () => {
    const url = `${Daily_API}searchDailyBoxOfficeList.json?key=${Key}&targetDt=${yesterDay}`;
    await Axios.get(url)
      .then(res => res.data)
      .then(data => {
        this.setState({
          daily: data.boxOfficeResult,
          list: data.boxOfficeResult.dailyBoxOfficeList,
          isLoading: false
        });
        console.log(this.state.daily);
        console.log(this.state.list);
      });
  };

  componentDidMount() {
    this.getDaily();
  }
  render() {
    const { daily, list, isLoading } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">
              <h2>Data Loading</h2>
            </span>
          </div>
        ) : (
          <div>
            <h3>{daily.boxofficeType}</h3>
            <div className="movies">
              {list.map(movie => (
                <DailyList
                  key={movie.index}
                  title={movie.movieNm}
                  Open={movie.openDt}
                  rank={movie.rank}
                  people={movie.audiAcc}
                  point={movie.audiChange}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }
}
