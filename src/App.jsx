import { Component, useState, React } from 'react';
import './App.css';
import Main from "./components/main-body";
import Side from "./components/side";
import Header from "./components/header";

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <>
        <Header />
        <Main />
        <Side />
      </>
    )
  }
}
