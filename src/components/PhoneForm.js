import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    phone: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  handleSumbit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: "",
      phone: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
        />
        <button type="submit">regist</button>
      </form>
    );
  }
}

export default PhoneForm;
