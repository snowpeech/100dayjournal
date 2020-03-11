import React from "react";

import FormInput from "../components/form-input.component";

class AmLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ blog: event.target.value });
    console.log("submitted");
    console.log(this.state.blog);
  };

  handleChange = event => {
    this.setState({ blog: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormInput handleChange={this.handleChange} />
          <button type='submit'>Submit </button>
        </form>
      </div>
    );
  }
}

export default AmLog;
