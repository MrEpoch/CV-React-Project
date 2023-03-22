import React,{ Component, useState } from 'react';
import './App.css';
import Main from "./components/main-body";
import Header from "./components/header";
import Contact from "./components/contact";

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <>
        <Header />
        <Main />
        <Contact />
      </>
    )
  }
}
