import React from "react";
import axios from "axios";
import { Dropdowns, ArrivalTime } from "./Dropdowns";
import "./Metro.css";

class Metro extends React.Component {
  state = {
    routes: [],
    stops: [],
    times: [],
  };

  componentDidMount() {
    axios.get("https://api.metro.net/agencies/lametro/routes/").then((res) => {
      const routes = res.data.items;
      this.setState({ routes });
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

  metroLine() {
    var line = document.getElementById("line").value;

    axios
      .get("https://api.metro.net/agencies/lametro/routes/" + line + "/stops/")
      .then((res) => {
        const stops = res.data.items;
        this.setState({ stops });
      });
  }

  metroStop() {
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
      <div id="container" className="ui container ui list">
        <h1>Bus Arrivals</h1>

        <Dropdowns subHeader="Choose Route" />
        <select
          onChange={this.metroLine.bind(this)}
          id="line"
          className="ui search selection dropdown large"
        >
          {this.state.routes.map((route) => (
            <option value={route.id}>{route.display_name}</option>
          ))}
        </select>

        <Dropdowns subHeader="Choose Stop" />
        <select
          id="stop"
          className="ui search selection dropdown large"
          onChange={this.metroStop.bind(this)}
        >
          {this.state.stops.map((stop) => (
            <option value={stop.id}>{stop.display_name}</option>
          ))}
        </select>

        <ArrivalTime
          subHeader="Estimated Arrival:"
          description="Minutes"
          {...this.state}
        />
      </div>
    );
  }
}

export default Metro;
