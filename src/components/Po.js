import React from "react";
import axios from "axios";

class Me extends React.Component {
  state = {
    routes: [],
    stops: [],
    times: [],
  };

  componentDidMount() {
    var line = document.getElementById("line").value;

    axios.get("https://api.metro.net/agencies/lametro/routes/").then((res) => {
      const routes = res.data.items;
      this.setState({ routes });
      console.log(line);
    });

    axios
      .get("https://api.metro.net/agencies/lametro/routes/" + 2 + "/stops/")
      .then((res) => {
        const stops = res.data.items;
        this.setState({ stops });
      });

    axios
      .get(
        "https://api.metro.net/agencies/lametro/routes/" +
          2 +
          "/stops/" +
          16291 +
          "/predictions/"
      )
      .then((res) => {
        const times = res.data.items[0];
        this.setState({ times });
      });
  }

  myU() {
    var line = document.getElementById("line").value;

    axios
      .get("https://api.metro.net/agencies/lametro/routes/" + line + "/stops/")
      .then((res) => {
        const stops = res.data.items;
        this.setState({ stops });
      });
  }

  moU() {
    var line = document.getElementById("line").value;
    var stop = document.getElementById("stop").value;
    axios
      .get(
        "https://api.metro.net/agencies/lametro/routes/" +
          line +
          "/stops/" +
          stop +
          "/predictions/"
      )
      .then((res) => {
        const times = res.data.items[0];
        this.setState({ times });
      });
  }

  render() {
    return (
      <div>
        <select
          id="line"
          className="ui dropdown"
          onChange={this.myU.bind(this)}
        >
          {this.state.routes.map((route) => (
            <option value={route.id}>{route.display_name}</option>
          ))}
        </select>

        <select
          id="stop"
          className="ui dropdown"
          onChange={this.moU.bind(this)}
        >
          {this.state.stops.map((stop) => (
            <option value={stop.id}>{stop.display_name}</option>
          ))}
        </select>

        {this.state.times.minutes}
      </div>
    );
  }
}

export default Me;
