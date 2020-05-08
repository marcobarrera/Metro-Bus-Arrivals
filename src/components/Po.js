import React from "react";
import axios from "axios";

class Me extends React.Component {
  state = {
    routes: [],
    stops: [],
  };

  componentDidMount() {
    axios.get("https://api.metro.net/agencies/lametro/routes/").then((res) => {
      const routes = res.data.items;
      this.setState({ routes });
    });

    axios
      .get("https://api.metro.net/agencies/lametro/routes/" + 51 + "/stops/")
      .then((res) => {
        const stops = res.data.items;
        this.setState({ stops });
      });
  }

  render() {
    return (
      <div>
        <select className="ui dropdown">
          {this.state.routes.map((route) => (
            <option value="">{route.display_name}</option>
          ))}
        </select>

        <select className="ui dropdown">
          {this.state.stops.map((stop) => (
            <option value="">{stop.display_name}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default Me;
