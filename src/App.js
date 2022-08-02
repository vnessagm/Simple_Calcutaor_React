import React, { Component } from "react";
import styled from "styled-components";

export const Calculator = styled.div`
  background: black;
  width: 25rem;
  height: 35rem;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 10px 10px 20px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    background: white;
    box-shadow: 5px 5px 15px black;
    width: 8rem;
    height: 3rem;
    text-align: center;
    padding: 5px;
    font-size: 1.8rem;
    border-radius: 5px;
  }
`;
export const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 16rem;
  padding: 10px;
  h1 {
    width: 450px;
    font-family: "Roboto", sans-serif;
    color: white;
    font-size: 1.3rem;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
  }
`;

export const BoxValue = styled.div`
  box-shadow: 8px 8px 20px white;
  border-radius: 10px;
  margin-top: 1rem;
  width: 15rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  input {
    width: 13rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 5px;
    border: none;
  }
`;

export const BoxBtn = styled.div`
  box-shadow: 8px 8px 20px white;
  border-radius: 10px;
  width: 15rem;
  height: 10rem;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  button {
    background-color: orange;
    color: white;
    width: 6rem;
    height: 30px;
    font-size: 1.3rem;
    margin-top: 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }
  button:last-child {
    background-color: grey;
    border: none;
    color: white;
  }
`;

export default class App extends Component {
  state = {
    n1: "",
    n2: "",
    result: "Result"
  };

  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  sum = () => {
    this.setState({
      result: this.state.n1 + this.state.n2
    });
  };

  sub = () => {
    this.setState({
      result: this.state.n1 - this.state.n2
    });
  };

  divide = () => {
    this.setState({
      result: this.state.n1 / this.state.n2
    });
  };

  multi = () => {
    this.setState({
      result: this.state.n1 * this.state.n2
    });
  };

  clear = () => {
    this.setState({
      n1: "",
      n2: "",
      result: ""
    });
  };

  render() {
    return (
      <Calculator>
        <BoxTitle>
          <h1>Calculator React</h1>
        </BoxTitle>

        <BoxValue>
          <input onChange={this.handleChange1} value={this.state.n1} />
          <input onChange={this.handleChange2} value={this.state.n2} />
        </BoxValue>

        <BoxBtn>
          <button onClick={this.sum}>+</button>
          <button onClick={this.sub}>-</button>
          <button onClick={this.divide}>/</button>
          <button onClick={this.multi}>*</button>
          <button onClick={this.clear}>Clear</button>
        </BoxBtn>
        <h2>{this.state.result}</h2>
      </Calculator>
    );
  }
}
