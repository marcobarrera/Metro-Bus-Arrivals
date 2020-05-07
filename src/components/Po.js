import React from "react";
import axios from "axios";

class Me extends React.Component {
  state = {
    persons: [],
    showMe: false,
  };

  componentDidMount() {
    axios.get(`https://api.metro.net/agencies/lametro/routes/`).then((res) => {
      const persons = res.data.items;
      this.setState({ persons });
      console.log(this.state.persons);
    });
  }

  oP() {
    this.setState({
      showMe: !this.state.showMe,
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.oP()}>Click Me</button>
        {this.state.showMe ? (
          <div>
            {this.state.persons.map((person) => (
              <li>{person.id}</li>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Me;
