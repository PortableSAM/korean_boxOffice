import React from "react";
import axios from "axios";
import moment from "moment";

const yesterDay = moment()
  .subtract(1, "d")
  .format("YYYYMMDD");
console.log(yesterDay);

export default class Daily extends React.Component {
  render() {
    return <div>Daily Api</div>;
  }
}
