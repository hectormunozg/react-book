import React from "react";

/* 
  1. Setup UserForm to accept props
  2. Display the proper values from props where needed
*/
const UserForm = (props) => (
  <p>
    <label htmlFor={props.label}>{props.label}</label>:
    <input id={props.id} type="text" onChange={props.onChange} />
  </p>
);

const Header = props => (
  <h2>
    {props.first} {props.last}
  </h2>
)

class Practice3 extends React.Component {
  state = {
    first: "First",
    last: "Last",
  };

  handleFirst = (e) => {
    this.setState({ first: e.target.value });
  };

  /* 
    3. Create a handler function called handleLast    
    4. Have the function update last in state to e.target.value
  */

  handleLast = (e) => {
    this.setState({ last: e.target.value });
  };

  render() {
    return (
      <>
        <Header first={this.state.first} last={this.state.last} />
        {/*
          3. Call <UserForm /> and pass in the following prop values
              id = "firstName"
              label = "First Name"
              onChange = handleFirst
          4. Call <UserForm /> again and pass in the following prop values
              id = "lastName"
              label = "Last Name"
              onChange = handleLast              
        */}
        <UserForm
          id="firstName"
          label="First Name"
          onChange={this.handleFirst}
        />
        <UserForm id="lastName" label="Last Name" onChange={this.handleLast} />
      </>
    );
  }
}

export default Practice3;
